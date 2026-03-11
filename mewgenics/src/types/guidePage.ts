export type GuideSeo = {
  title: string
  description: string
  keywords: string[]
}

export type GuidePage = {
  slug: string
  title: string
  description: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  seo: GuideSeo
  detailsHtml: string
  isNow?: boolean
}
