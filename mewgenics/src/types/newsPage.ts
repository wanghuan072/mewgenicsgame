export type NewsSeo = {
  title: string
  description: string
  keywords: string[]
}

export type NewsPage = {
  slug: string
  title: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: NewsSeo
  detailsHtml: string
  isNow?: boolean
}
