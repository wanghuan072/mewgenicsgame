import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import jiti from 'jiti'

const j = jiti(import.meta.url, { interopDefault: true })

const SITE_URL =
  (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://mewgenics.guide').replace(/\/+$/, '')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')

function toUrl(p) {
  if (!p.startsWith('/')) return `/${p}`
  return p
}

function absolute(p) {
  return `${SITE_URL}${toUrl(p)}`
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function urlNode(loc, lastmod) {
  const lm = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ''
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lm}\n  </url>`
}

const now = new Date().toISOString()

// Static routes (no params)
const staticPaths = [
  '/',
  '/breeding-tool',
  '/classes',
  '/guides',
  '/search',
  '/mods',
  '/news',
  '/wiki',
  '/wiki/boss',
  '/wiki/events',
  '/wiki/npcs',
  '/wiki/items',
  '/privacy',
  '/terms',
  '/copyright',
  '/about',
  '/contact',
]

// Dynamic routes from data
const guides = j(path.join(projectRoot, 'src/data/guides.data.ts')).default || []
const news = j(path.join(projectRoot, 'src/data/news.data.ts')).default || []
const classes = j(path.join(projectRoot, 'src/data/classes.data.ts')).default || []
const mods = j(path.join(projectRoot, 'src/data/mods.data.ts')).default || []
const boss = j(path.join(projectRoot, 'src/data/wiki/boss.data.ts')).default || []
const events = j(path.join(projectRoot, 'src/data/wiki/events.data.ts')).default || []
const npcs = j(path.join(projectRoot, 'src/data/wiki/npcs.data.ts')).default || []
const items = j(path.join(projectRoot, 'src/data/wiki/items.data.ts')).default || []

const dynamicPaths = []
for (const g of guides) dynamicPaths.push(`/guides/${g.slug}`)
for (const n of news) dynamicPaths.push(`/news/${n.slug}`)
for (const c of classes) dynamicPaths.push(`/classes/${c.slug}`)
for (const m of mods) dynamicPaths.push(`/mods/${m.slug}`)

for (const b of boss) if (b?.isPage) dynamicPaths.push(`/wiki/boss/${b.slug}`)
for (const e of events) if (e?.isPage) dynamicPaths.push(`/wiki/events/${e.slug}`)
for (const n of npcs) if (n?.isPage) dynamicPaths.push(`/wiki/npcs/${n.slug}`)
for (const i of items) if (i?.isPage) dynamicPaths.push(`/wiki/items/${i.slug}`)

const allPaths = Array.from(new Set([...staticPaths, ...dynamicPaths]))

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...allPaths.map((p) => urlNode(absolute(p), now)),
  `</urlset>`,
  '',
].join('\n')

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8')

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8')

console.log(`[sitemap] wrote ${allPaths.length} urls -> public/sitemap.xml`)

