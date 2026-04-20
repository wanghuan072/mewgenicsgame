/**
 * Builds src/data/wiki/enemies.data.ts — hierarchical groups (Act → Chapter → Area)
 * aligned with https://mewgenics.wiki.gg/wiki/Enemies (CC BY-SA).
 *
 * Run: node scripts/generate-enemies-data.mjs
 * Images: run `node scripts/download-enemy-images.mjs` then regenerate so imageUrl picks up saved files.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dest = path.join(root, 'src', 'data', 'wiki', 'enemies.data.ts')
const PLACEHOLDER = '/images/enemies/enemy-placeholder.svg'

function imageForSlug(slug) {
  const base = path.join(root, 'public', 'images', 'enemies', slug)
  for (const ext of ['.png', '.webp', '.jpg', '.jpeg', '.svg']) {
    if (fs.existsSync(base + ext)) return `/images/enemies/${slug}${ext}`
  }
  return PLACEHOLDER
}

/**
 * @param {string} slug
 * @param {string} name
 * @param {{ description?: string, enemyType?: string, spawn?: string, tags?: string[] }} [extra]
 */
function card(slug, name, extra = {}) {
  const o = {
    slug,
    name,
    publishDate: '2026-04-20',
    imageUrl: imageForSlug(slug),
    imageAlt: `Mewgenics enemy ${name}`,
    isPage: false,
    detailsHtml: '',
    seo: {},
  }
  if (extra.description) o.description = extra.description
  if (extra.enemyType) o.enemyType = extra.enemyType
  if (extra.spawn) o.spawn = extra.spawn
  if (extra.tags?.length) o.tags = extra.tags
  return o
}

export function buildEnemiesBundle() {
  const summonsNames = [
    ['spiderling', 'Spiderling'],
    ['flea', 'Flea'],
    ['maggot', 'Maggot'],
    ['rot-fly', 'Rot Fly'],
    ['steel-fly', 'Steel Fly'],
    ['tiny-tumor', 'Tiny Tumor'],
    ['bounty-hunter-enemy', 'Bounty Hunter'],
    ['pooter', 'Pooter'],
    ['tom-tom', 'Tom Tom'],
    ['pet-boulder', 'Pet Boulder'],
    ['pet-rock-summon', 'Pet Rock'],
    ['leech-familiar', 'Leech'],
    ['bear', 'Bear'],
    ['caterpillar', 'Caterpillar'],
    ['druids-crow', "Druid's Crow"],
    ['frog', 'Frog'],
    ['snake', 'Snake'],
    ['squirrel', 'Squirrel'],
    ['turtle', 'Turtle'],
    ['bombchu-familiar', 'Bombchu'],
    ['mech-suit-familiar', 'Mech Suit'],
    ['catbot-familiar', 'Catbot'],
    ['turret', 'Turret'],
    ['nurse-bot-familiar', 'Nurse Bot'],
    ['rubber-fist-bot', 'Rubber Fist Bot'],
    ['robo-vac-familiar', 'Robo-Vac'],
  ]

  const summonsEntries = summonsNames.map(([slug, name]) =>
    card(slug, name, { enemyType: 'Summon' }),
  )

  const eventEntries = [
    card('bounty-hunter-event', 'Bounty Hunter (Event)', { enemyType: 'Event' }),
    card('death-event', 'Death!', { enemyType: 'Event' }),
    card('twister', 'Twister', { enemyType: 'Event' }),
  ]

  const birdRows = [
    ['black-bird', 'Black Bird', 'Small', 'Common'],
    ['dove', 'Dove', 'Small', 'Uncommon'],
    ['hummingbird', 'Hummingbird', 'Small', 'Rare'],
    ['cherub', 'Cherub', 'Small', 'Ultra Rare'],
    ['pigeon', 'Pigeon', 'Medium', 'Common'],
    ['seagull', 'Seagull', 'Medium', 'Uncommon'],
    ['raven', 'Raven', 'Medium', 'Rare'],
    ['mutant', 'Mutant', 'Medium', 'Ultra Rare'],
    ['chicken', 'Chicken', 'Large', 'Common'],
    ['turkey', 'Turkey', 'Large', 'Uncommon'],
    ['eagle', 'Eagle', 'Large', 'Rare'],
    ['harpy', 'Harpy', 'Large', 'Ultra Rare'],
  ]
  const birdEntries = birdRows.map(([slug, name, size, rarity]) =>
    card(slug, name, { enemyType: 'Bonus bird', tags: [size, rarity] }),
  )

  const alleyOnly = [
    ['cat-caller', 'Cat Caller'],
    ['fly', 'Fly'],
    ['kitten', 'Kitten'],
    ['leaper', 'Leaper'],
    ['lil-rat', "Lil' Rat"],
    ['lumpy', 'Lumpy'],
    ['mangy', 'Mangy'],
    ['pinky', 'Pinky'],
    ['water-kitten', 'Water Kitten'],
  ]
  const alleyEntries = alleyOnly.map(([slug, name]) =>
    card(`alley-${slug}`, name, { enemyType: 'Standard' }),
  )

  const sewers = [
    'Baby Shark',
    'Boomer',
    'Daddy Shark',
    'Dip',
    'Fetus',
    'Floater',
    'Sharky',
    'Water Leech',
  ]
  const sewerEntries = sewers.map((name) => {
    const slug =
      'sewers-' +
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
    return card(slug, name, { enemyType: 'Standard' })
  })

  return {
    groups: [
      {
        id: 'summons',
        title: 'Summons',
        chapters: [{ id: 'summons-list', title: '', entries: summonsEntries }],
      },
      {
        id: 'events',
        title: 'Events',
        chapters: [
          {
            id: 'events-weather',
            title: 'Event / weather pools',
            entries: eventEntries,
          },
        ],
      },
      {
        id: 'all',
        title: 'All',
        chapters: [
          {
            id: 'bonus-birds',
            title: 'Bonus birds',
            entries: birdEntries,
          },
        ],
      },
      {
        id: 'act-1',
        title: 'Act 1',
        actLabel: 'Act 1',
        chapters: [
          {
            id: 'act-1-ch-1',
            title: 'Chapter 1',
            areas: [{ id: 'act-1-ch-1-alley', title: 'Alley', entries: alleyEntries }],
          },
          {
            id: 'act-1-ch-2',
            title: 'Chapter 2',
            areas: [{ id: 'act-1-ch-2-sewers', title: 'Sewers', entries: sewerEntries }],
          },
        ],
      },
    ],
  }
}

let nextId = 1

function assignIds(bundle) {
  nextId = 1
  for (const g of bundle.groups) {
    for (const ch of g.chapters) {
      if (ch.entries) {
        for (const e of ch.entries) e.id = nextId++
      }
      if (ch.areas) {
        for (const a of ch.areas) {
          for (const e of a.entries) e.id = nextId++
        }
      }
    }
  }
}

function countCards(bundle) {
  let n = 0
  for (const g of bundle.groups) {
    for (const ch of g.chapters) {
      n += ch.entries?.length || 0
      if (ch.areas) for (const a of ch.areas) n += a.entries.length
    }
  }
  return n
}

function writeTs(bundle) {
  assignIds(bundle)
  const header = `/**
 * Enemies — hierarchical data from https://mewgenics.wiki.gg/wiki/Enemies (CC BY-SA).
 * Shape: groups[] → chapters[] → optional areas[] → entries (enemy cards).
 * Optional fields on cards: description, enemyType, spawn, tags.
 * Regenerate: \`npm run enemies:data\`. Images: \`npm run enemies:images\` then regenerate.
 */
`
  fs.writeFileSync(dest, header + `export default ${JSON.stringify(bundle, null, 2)}\n`, 'utf8')
}

function isMain() {
  const p = process.argv[1] && path.resolve(process.argv[1])
  return p === path.resolve(fileURLToPath(import.meta.url))
}

if (isMain()) {
  const bundle = buildEnemiesBundle()
  writeTs(bundle)
  console.log('wrote', dest, 'cards', countCards(bundle))
}
