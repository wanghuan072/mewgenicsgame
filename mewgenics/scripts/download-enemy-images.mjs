/**
 * Resolve each file via MediaWiki API, then download into public/images/enemies/{slug}.png|svg
 * Run: node scripts/download-enemy-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildEnemiesBundle } from './generate-enemies-data.mjs'
import { wikiImageCandidates } from './enemy-wiki-image.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'images', 'enemies')

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

const WIKI_UA = 'mewgenicsgame-enemy-images/1.0 (https://mewgenicsgame.org; local build script)'

async function resolveImageUrl(wikiFileName) {
  const title = `File:${wikiFileName}`
  const api = `https://mewgenics.wiki.gg/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(api, { headers: { 'User-Agent': WIKI_UA } })
    if (res.status === 429) {
      await sleep(8000 + attempt * 4000)
      continue
    }
    if (!res.ok) throw new Error(`API ${res.status}`)
    const j = await res.json()
    const pages = j.query?.pages
    if (!pages) throw new Error('no pages')
    const page = Object.values(pages)[0]
    if (page.missing) throw new Error(`missing: ${title}`)
    const url = page.imageinfo?.[0]?.url
    if (!url) throw new Error(`no url: ${title}`)
    return url
  }
  throw new Error('API 429 after retries')
}

async function downloadBinary(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const img = await fetch(url, { headers: { 'User-Agent': WIKI_UA } })
    if (img.status === 429) {
      await sleep(8000 + attempt * 4000)
      continue
    }
    if (!img.ok) throw new Error(`img HTTP ${img.status}`)
    return Buffer.from(await img.arrayBuffer())
  }
  throw new Error('image 429 after retries')
}

function flattenCards(bundle) {
  const list = []
  for (const g of bundle.groups) {
    for (const ch of g.chapters) {
      if (ch.entries) {
        for (const e of ch.entries) list.push(e)
      }
      if (ch.areas) {
        for (const a of ch.areas) {
          for (const e of a.entries) list.push(e)
        }
      }
    }
  }
  return list
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true })
  const bundle = buildEnemiesBundle()
  const cards = flattenCards(bundle)
  let ok = 0
  for (const { slug, name } of cards) {
    const candidates = wikiImageCandidates(slug, name)
    let saved = false
    for (const wikiName of candidates) {
      const ext = wikiName.toLowerCase().endsWith('.svg') ? '.svg' : '.png'
      const dest = path.join(outDir, `${slug}${ext}`)
      if (fs.existsSync(dest) && fs.statSync(dest).size > 400) {
        console.log(`[skip exists] ${slug}${ext}`)
        ok++
        saved = true
        break
      }
      try {
        const url = await resolveImageUrl(wikiName)
        await sleep(700)
        const buf = await downloadBinary(url)
        fs.writeFileSync(dest, buf)
        ok++
        console.log(`[ok] ${slug} <- ${wikiName} (${buf.length} bytes)`)
        saved = true
        break
      } catch {
        /* try next candidate */
      }
      await sleep(400)
    }
    if (!saved) console.warn(`[no image] ${slug} (${name}) tried: ${candidates.join(', ')}`)
    await sleep(900)
  }
  console.log(`\nDone: ${ok}/${cards.length} with local files -> ${outDir}`)
  console.log('Run: npm run enemies:data  (regenerates imageUrl from disk)')
}

main()
