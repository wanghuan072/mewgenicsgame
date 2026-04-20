/**
 * Generates src/data/wiki/minibosses.data.ts from structured rows (wiki.gg Mini-Bosses).
 * Run: node scripts/generate-minibosses-data.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

/** Local /images/miniboss/{slug}.ext — fallback CDN if file missing during dev */
const WIKI_IMG = 'https://mewgenics.wiki.gg/images'

const rows = [
  ['magnus', 'Magnus', 'Has a chain dash and spin attack that hits all adjacent units!', 'Act 1', 'Chapter 1', 'Fighter', ''],
  ['fenrir', 'Fenrir', 'Tosses bear traps! Has an affinity for tall grass. Knocks back Melee attackers.', 'Act 1', 'Chapter 1', 'Hunter', ''],
  ['maisie', 'Maisie', 'Protects her kittens when they are attacked.', 'Act 1', 'Chapter 1', 'Tank', ''],
  ['lucy', 'Lucy', 'Her powerful spells take time to charge up.', 'Act 1', 'Chapter 1', 'Mage', ''],
  ['the-flushmaster', 'The Flushmaster', 'Mini-boss encountered on the Chapter 1 split path.', 'Act 1', 'Chapter 1', '', ''],
  [
    'rat-king',
    'Rat King',
    'Spawns Rat Chargers and Throws adjacent units.',
    'Act 1',
    'Chapter 1',
    '',
    'Begins appearing in the Sewers after it has been completed once.',
  ],
  ['can-creeper', 'Can Creeper', 'Mini-boss on the Chapter 1 split path.', 'Act 1', 'Chapter 1', '', ''],
  ['trampy', 'Trampy', 'Mini-boss on the Chapter 1 split path.', 'Act 1', 'Chapter 1', '', ''],
  ['big-slime', 'Big Slime', 'Mini-boss on the Chapter 1 split path.', 'Act 1', 'Chapter 1', '', ''],
  ['mama-maggot', 'Mama Maggot', 'Mini-boss on the Chapter 1 split path.', 'Act 1', 'Chapter 1', '', ''],
  ['gein', 'Gein', 'Hooks and pulls units that end their movement in range, inflicting Bleed.', 'Act 2', 'Per-area pair', 'Butcher', ''],
  ['dack', 'Dack', 'His ranged attacks scatter held coins. Has a melee attack that inflicts Poison.', 'Act 2', 'Per-area pair', 'Thief', ''],
  ['morana', 'Morana', 'Its ranged attack inflicts leech. Reanimates Dead Bodies.', 'Act 2', 'Per-area pair', 'Necromancer', ''],
  ['marshmallow', 'Marshmallow', 'Her lick attack Charms units.', 'Act 2', 'Per-area pair', 'Cleric', ''],
  ['lenny', 'Lenny', 'Act 2 mini-boss.', 'Act 2', 'Per-area pair', '', ''],
  [
    'bumblefoot',
    'Bumblefoot',
    'Its leap attack will turn it upside down. When upside down it performs an area attack.',
    'Act 2',
    'Per-area pair',
    '',
    'Begins appearing in the Bunker after it has been completed once.',
  ],
  [
    'infested-pair',
    'Infested Pair',
    'Takes an extra turn for each Sprout.',
    'Act 2',
    'Per-area pair',
    '',
    'Begins appearing in The Crater after it has been completed once.',
  ],
  ['rocky-bobo', 'Rocky Bobo', 'Act 2 mini-boss.', 'Act 2', 'Per-area pair', '', ''],
  ['the-abandoned-ones', 'The Abandoned Ones', 'Act 2 mini-boss.', 'Act 2', 'Per-area pair', '', ''],
  ['cerberubs', 'Cerberubs', 'Act 2 mini-boss.', 'Act 2', 'Per-area pair', '', ''],
  ['chan-hung', 'Chan Hung', 'Uses his own actions every time one of his enemies uses an action.', 'Act 3', 'One per area', 'Monk', ''],
  ['alice', 'Alice', 'Has a psychic choke attack that inflicts Bruise on a unit in her line of sight.', 'Act 3', 'One per area', 'Psychic', ''],
  ['draven', 'Draven', 'Heals and buffs his crows. Enters Squirrel Form once his crows die.', 'Act 3', 'One per area', 'Druid', ''],
  ['franklin', 'Franklin', 'Spawns robots and crafts weapons. Enters a Mech when at low HP.', 'Act 3', 'One per area', 'Tinkerer', ''],
  ['frostbiter', 'Frostbiter', 'Act 3 mini-boss in the ice-themed route content.', 'Act 3', 'One per area', '', ''],
  ['the-rocksnows', 'The Rocksnows', 'Act 3 mini-boss encounter.', 'Act 3', 'One per area', '', ''],
  ['dr-mangler', 'Dr. Mangler', 'Controls the Monster; encountered in The Future.', 'Act 3', 'One per area', '', ''],
  ['zapphauser', 'Zapphauser', 'Teleports and strikes tiles of the same parity; primes a counter when damaged.', 'Act 3', 'One per area', '', ''],
  ['dino-lovers', 'Dino Lovers', 'Act 3 mini-boss.', 'Act 3', 'One per area', '', ''],
  ['the-bloat', 'The Bloat', 'Bloody undead body with detachable eyeballs and blood lasers.', 'Act 3', 'One per area', '', ''],
  [
    'arthur',
    'Arthur',
    'Who knows what he will do!?',
    'Special',
    'Special',
    'Jester',
    'Begins appearing in Chapter 1 of any Act once the Jester collar is unlocked.',
  ],
  ['chupacabra', 'Chupacabra', 'Event-associated mini-boss encounter.', 'Event', 'Event', '', ''],
  ['dust-devil', 'Dust Devil', 'Event-associated mini-boss encounter.', 'Event', 'Event', '', ''],
  ['glowing-bear', 'Glowing Bear', 'Event-associated mini-boss encounter.', 'Event', 'Event', '', ''],
  ['hellspawn', 'Hellspawn', 'Event-associated mini-boss encounter.', 'Event', 'Event', '', ''],
  ['white-rabbit', 'White Rabbit', 'Event-associated mini-boss encounter.', 'Event', 'Event', '', ''],
]

function localImage(slug) {
  const extBy = {
    chupacabra: 'svg',
  }
  const ext = extBy[slug] || 'png'
  return `/images/miniboss/${slug}.${ext}`
}

/** Hotlink fallback (same CDN file) when local download failed in CI */
function imageUrl(slug) {
  const map = {
    alice: `${WIKI_IMG}/MINIBOSS_Alice_Intro_Art.png`,
    frostbiter: `${WIKI_IMG}/Frostbiter_Intro_Art.png`,
    'the-rocksnows': `${WIKI_IMG}/The_Rocksnows_Intro_Art.png`,
    'dust-devil': `${WIKI_IMG}/MINIBOSS_Dust_Devil_Intro.png`,
  }
  return map[slug] || localImage(slug)
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ')
}

let id = 1
const blocks = rows.map(([slug, name, description, act, group, represents, locked]) => {
  const img = imageUrl(slug)
  const stats = { act, group, ...(represents ? { represents } : {}), ...(locked ? { unlock: locked } : {}) }
  const statsStr = JSON.stringify(stats)
  const kw = [
    'mewgenics mini-boss',
    'mewgenics miniboss',
    name.toLowerCase(),
    'mewgenics wiki',
    act.toLowerCase(),
  ]
  const title = `Mewgenics ${name} Mini-Boss Guide — ${act}`
  const desc = `${name} mini-boss in Mewgenics (${act}): ${esc(description).slice(0, 140)}`
  const lockedHtml = locked
    ? `<p><strong>Unlock:</strong> ${esc(locked)}</p>`
    : ''
  const repHtml = represents
    ? `<p>In the community wiki trivia, <strong>${esc(name)}</strong> is associated with the <strong>${esc(represents)}</strong> class theme where applicable.</p>`
    : ''

  const html = `
      <p><strong>${esc(name)}</strong> is a <strong>Mini-Boss</strong> in <strong>Mewgenics</strong>: a tougher mid-chapter encounter on the split between normal and hard paths (weaker than full bosses; boss lyrics are not played). Source overview: <a href="https://mewgenics.wiki.gg/wiki/Mini-Bosses" target="_blank" rel="noopener noreferrer">Mini-Bosses on mewgenics.wiki.gg</a> (CC BY-SA / community wiki).</p>
      <p><strong>Placement:</strong> ${esc(act)} — ${esc(group)}.</p>
      ${lockedHtml}
      ${repHtml}
      <h2>Quick summary</h2>
      <p>${esc(description)}</p>
      <h2>Notes</h2>
      <ul>
        <li>Mini-boss tuning and spawn rules can change with patches—double-check in-game if something feels off.</li>
        <li>For deep mechanics (attacks, phases, AI), open the character page on <a href="https://mewgenics.wiki.gg/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}" target="_blank" rel="noopener noreferrer">mewgenics.wiki.gg</a> when available.</li>
      </ul>
    `.trim()

  const block = `  {
    id: ${id++},
    slug: '${slug}',
    name: '${esc(name)}',
    description: '${esc(description)}',
    publishDate: '2026-04-20',
    imageUrl: '${img}',
    imageAlt: 'Mewgenics mini-boss ${esc(name)} intro art',
    seo: {
      title: '${esc(title)}',
      description: '${esc(desc)}',
      keywords: ${JSON.stringify(kw)},
    },
    stats: ${statsStr},
    isPage: true,
    detailsHtml: \`${html}\`,
  }`
  return block
})

const header = `/**
 * Mini-Bosses — data derived from https://mewgenics.wiki.gg/wiki/Mini-Bosses (CC BY-SA community wiki).
 * Intro art filenames match wiki file names; images copied under /public/images/miniboss/ where downloaded.
 * Four entries may use absolute mewgenics.wiki.gg image URLs if local files are absent.
 */
export default [
`

const out = header + blocks.join(',\n') + '\n]\n'
const dest = path.join(root, 'src', 'data', 'wiki', 'minibosses.data.ts')
fs.writeFileSync(dest, out, 'utf8')
console.log('wrote', dest, 'entries', rows.length)
