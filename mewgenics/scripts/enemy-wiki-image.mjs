/**
 * Guess wiki.gg File: names for enemy art (ENEMY_*.png / _(Familiar) variants).
 */

/** slug → exact wiki filename (include extension) */
export const WIKI_FILE_BY_SLUG = {
  mutant: 'ENEMY MUTANT.png',
  harpy: 'ENEMY_Harpy.png',
  'bounty-hunter-event': 'ENEMY_Bounty_Hunter.png',
  'lil-rat': 'ENEMY_Lil_Rat.png',
  'pet-rock-summon': 'ENEMY_Pet_Rock.png',
  'robo-vac-familiar': 'ENEMY_Robo-Vac_(Familiar).png',
  'mech-suit-familiar': 'ENEMY_Mech_Suit_(Familiar).png',
  'death-event': 'ENEMY_Death.png',
  'nurse-bot-familiar': 'ENEMY_Nurse_Bot.png',
  'rubber-fist-bot': 'ENEMY_Rubber_Fist_Bot.png',
}

function coreUnderscore(displayName) {
  return displayName
    .trim()
    .replace(/'/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
}

/**
 * @param {string} slug
 * @param {string} displayName
 * @returns {string[]}
 */
export function wikiImageCandidates(slug, displayName) {
  const fromSlug = WIKI_FILE_BY_SLUG[slug]
  if (fromSlug) return [fromSlug]

  const n = displayName.trim()
  const core = coreUnderscore(n)

  const familiar = []
  if (slug.endsWith('-familiar')) {
    familiar.push(
      `ENEMY_${core}_(Familiar).png`,
      `ENEMY_${core}_(Familiar).svg`,
      `ENEMY ${n} (Familiar).png`,
      `ENEMY ${n} (Familiar).svg`,
    )
  }

  const undersPng = `ENEMY_${core}.png`
  const spacedPng = `ENEMY ${n}.png`
  const undersSvg = `ENEMY_${core}.svg`
  const spacedSvg = `ENEMY ${n}.svg`

  return [...new Set([...familiar, undersPng, spacedPng, undersSvg, spacedSvg])]
}
