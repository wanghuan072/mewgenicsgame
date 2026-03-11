export type ModSeo = {
  title: string
  description: string
  keywords: string[]
}

export type ModPage = {
  id: number
  slug: string
  title: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: ModSeo
  detailsHtml: string
  isNow?: boolean
  author: string
  sourceUrl: string
  sourceLabel: string
}
