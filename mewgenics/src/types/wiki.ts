/** Generic wiki list entry (Boss, Event, NPC, Item). */
export type WikiEntry = {
  slug: string
  name: string
  description: string
  imageUrl?: string
  imageAlt?: string
}

/** Boss wiki entry with optional detail page. */
export type BossEntry = {
  id: string
  slug: string
  name: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: {
    title?: string
    description?: string
    keywords?: string[]
  }
  /** e.g. area, chapter, phase - structure up to you */
  stats?: Record<string, string | number>
  /** If true, has a detail page at /wiki/boss/:slug */
  isPage: boolean
  /** HTML for detail page body (used when isPage is true) */
  detailsHtml: string
}

/** Event wiki entry with optional detail page. Same shape as BossEntry for consistency. */
export type EventEntry = {
  id: string
  slug: string
  name: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: {
    title?: string
    description?: string
    keywords?: string[]
  }
  stats?: Record<string, string | number>
  isPage: boolean
  detailsHtml: string
}

/** Item wiki entry with optional detail page. id is numeric 1,2,3...; seo empty; no stats. */
export type ItemEntry = {
  id: number
  slug: string
  name: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: { title?: string; description?: string; keywords?: string[] }
  /** Effect/usage line; shown below description. */
  intro?: string
  isPage: boolean
  detailsHtml: string
}

/** NPC wiki entry with optional detail page. Same shape as BossEntry for consistency. */
export type NpcEntry = {
  id: string
  slug: string
  name: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: {
    title?: string
    description?: string
    keywords?: string[]
  }
  stats?: Record<string, string | number>
  isPage: boolean
  detailsHtml: string
}
