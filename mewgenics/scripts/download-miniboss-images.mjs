/**
 * Resolves each file via MediaWiki API, then downloads (avoids 404 from wrong on-disk names).
 * Run: node scripts/download-miniboss-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'images', 'miniboss')

/** Local slug basename → exact wiki filename on wiki.gg (from Mini-Bosses page wikitext) */
const files = [
  ['magnus.png', 'MINIBOSS_Magnus_Intro_Art.png'],
  ['fenrir.png', 'MINIBOSS_Fenrir Intro Art.png'],
  ['maisie.png', 'MINIBOSS_Maisie_Intro_Art.png'],
  ['lucy.png', 'MINIBOSS_Lucy_Intro_Art.png'],
  ['the-flushmaster.png', 'MINIBOSS_Flushmaster_Intro.png'],
  ['rat-king.png', 'Rat_King_Intro_Art.png'],
  ['can-creeper.png', 'Can_Creeper_Intro Art.png'],
  ['trampy.png', 'MINIBOSS Trampy Intro Art.png'],
  ['big-slime.png', 'Big_Slime_Intro_Art.png'],
  ['mama-maggot.png', 'Mama Maggot Intro Art.png'],
  ['gein.png', 'MINIBOSS_Gein Intro Art.png'],
  ['dack.png', 'MINIBOSS_Dack_Intro_Art.png'],
  ['morana.png', 'MINIBOSS_Morana_Intro_Art.png'],
  ['marshmallow.png', 'MINIBOSS_Marshmallow_Intro_Art.png'],
  ['lenny.png', 'MINIBOSS_Lenny Intro Art.png'],
  ['bumblefoot.png', 'MINIBOSS_Bumblefoot_Intro_Art.png'],
  ['infested-pair.png', 'MINIBOSS_Infested_Pair_Intro_Art.png'],
  ['rocky-bobo.png', 'MINIBOSS_Rocky_Bobo_Intro_Art.png'],
  ['the-abandoned-ones.png', 'The_Abandoned_Ones_Intro_Art.png'],
  ['cerberubs.png', 'MINIBOSS_Cerberubs_Intro_Art.png'],
  ['chan-hung.png', 'MINIBOSS_Chan Hung_Intro_Art.png'],
  ['alice.png', 'MINIBOSS_Alice_Intro_Art.png'],
  ['draven.png', 'MINIBOSS_Draven_Intro_Art.png'],
  ['franklin.png', 'MINIBOSS_Franklin_Intro_Art.png'],
  ['frostbiter.png', 'Frostbiter_Intro_Art.png'],
  ['the-rocksnows.png', 'The Rocksnows_Intro_Art.png'],
  ['dr-mangler.png', 'MINIBOSS_Dr. Mangler_Intro_Art.png'],
  ['zapphauser.png', 'MINIBOSS_Zapphauser_Intro_Art.png'],
  ['dino-lovers.png', 'Dino Lovers_Intro_Art.png'],
  ['the-bloat.png', 'MINIBOSS The Bloat_Intro.png'],
  ['arthur.png', 'MINIBOSS_Arthur_Intro_Art.png'],
  ['chupacabra.svg', 'ENEMY Chupacabra.svg'],
  ['dust-devil.png', 'MINIBOSS Dust_Devil_Intro.png'],
  ['glowing-bear.png', 'ENEMY Glowing Bear.png'],
  ['hellspawn.png', 'ENEMY Hellspawn.png'],
  ['white-rabbit.png', 'ENEMY White Rabbit.png'],
]

async function resolveImageUrl(wikiFileName) {
  const title = `File:${wikiFileName}`
  const api =
    `https://mewgenics.wiki.gg/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(api)
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
    const img = await fetch(url)
    if (img.status === 429) {
      await sleep(8000 + attempt * 4000)
      continue
    }
    if (!img.ok) throw new Error(`img HTTP ${img.status}`)
    return Buffer.from(await img.arrayBuffer())
  }
  throw new Error('image 429 after retries')
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true })
  let ok = 0
  for (const [localName, wikiName] of files) {
    const dest = path.join(outDir, localName)
    if (fs.existsSync(dest) && fs.statSync(dest).size > 500) {
      console.log(`[skip exists] ${localName}`)
      ok++
      continue
    }
    try {
      const url = await resolveImageUrl(wikiName)
      await sleep(800)
      const buf = await downloadBinary(url)
      fs.writeFileSync(dest, buf)
      ok++
      console.log(`[ok] ${localName} (${buf.length} bytes)`)
    } catch (e) {
      console.warn(`[fail] ${localName} (${wikiName}):`, e?.message || e)
    }
    await sleep(1200)
  }
  console.log(`\nDone: ${ok}/${files.length} -> ${outDir}`)
}

main()
