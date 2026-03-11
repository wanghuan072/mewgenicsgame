export type ClassSeo = {
  title: string
  description: string
  keywords: string[]
}

export type ClassStatModifier = {
  label: string
  value: string
}

export type ClassStats = {
  buffs: ClassStatModifier[]
  debuffs: ClassStatModifier[]
  levelUp: ClassStatModifier[]
}

export type ClassPage = {
  slug: string
  title: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: ClassSeo
  detailsHtml: string
  stats?: ClassStats
  isNow?: boolean
}

