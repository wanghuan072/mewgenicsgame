import { seoConfig } from './config'

export type ApplySeoInput = {
  title?: string
  description?: string
  keywords?: string[] | string
  type?: 'website' | 'article'
  imageUrl?: string
  canonicalPath?: string
}

function getSiteUrl(): string {
  const envUrl = (import.meta as any)?.env?.VITE_SITE_URL as string | undefined
  if (envUrl && /^https?:\/\//i.test(envUrl)) return envUrl.replace(/\/+$/, '')
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin
  return ''
}

function toAbsoluteUrl(urlOrPath: string | undefined): string | undefined {
  if (!urlOrPath) return undefined
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath
  const site = getSiteUrl()
  if (!site) return urlOrPath
  const path = urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`
  return `${site}${path}`
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string | undefined) {
  if (typeof document === 'undefined') return
  if (!content) return
  const selector = `meta[${attribute}="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string | undefined) {
  if (typeof document === 'undefined') return
  if (!href) return
  const selector = `link[rel="${rel}"]`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function buildCanonicalUrl(pathname: string): string | undefined {
  const site = getSiteUrl()
  if (!site) return undefined
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${site}${path}`
}

/**
 * 在客户端更新：TDK、Canonical、OG、Twitter（用于 SPA 路由切换）。
 * 说明：这是 “运行时 SEO”，不等同于 SSR/预渲染，但对分享卡片/抓取仍有帮助。
 */
export function applySeo(input: ApplySeoInput) {
  if (typeof document === 'undefined') return

  const title = input.title ?? seoConfig.defaults.title
  const description = input.description ?? seoConfig.defaults.description
  const keywords = input.keywords ?? seoConfig.defaults.keywords
  const keywordText = Array.isArray(keywords) ? keywords.join(', ') : keywords
  const type = input.type ?? seoConfig.defaults.type

  const canonical =
    input.canonicalPath ? buildCanonicalUrl(input.canonicalPath) : buildCanonicalUrl(window.location.pathname)

  const image =
    toAbsoluteUrl(input.imageUrl) ??
    toAbsoluteUrl(seoConfig.defaults.imagePath) ??
    input.imageUrl ??
    seoConfig.defaults.imagePath

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('name', 'keywords', keywordText)

  // Open Graph
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'og:site_name', seoConfig.defaults.siteName)
  upsertMeta('property', 'og:locale', seoConfig.defaults.locale)
  if (canonical) upsertMeta('property', 'og:url', canonical)
  if (image) upsertMeta('property', 'og:image', image)

  // Twitter
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  if (image) upsertMeta('name', 'twitter:image', image)
  if (seoConfig.social.twitterHandle) upsertMeta('name', 'twitter:site', seoConfig.social.twitterHandle)

  // Canonical
  if (canonical) upsertLink('canonical', canonical)
}

