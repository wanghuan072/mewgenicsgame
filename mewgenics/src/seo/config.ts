export type SeoSocialConfig = {
  twitterHandle?: string
}

export type SeoDefaults = {
  siteName: string
  title: string
  description: string
  keywords: string[]
  imagePath: string
  type: 'website' | 'article'
  locale?: string
}

/**
 * SEO 站点配置（运行时会用 VITE_SITE_URL 作为域名来源）
 * - 这里放“站点级”默认值（fallback）
 * - 具体页面的 title/description/keywords 由路由 meta 或详情页数据覆盖
 */
export const seoConfig: {
  defaults: SeoDefaults
  social: SeoSocialConfig
} = {
  defaults: {
    siteName: 'Mewgenics Guide',
    title: 'Mewgenics Game | Wiki, Classes & Breeding Tool',
    description: 'Mewgenics game guide - Breeding calculator, wiki, classes, guides, mods, and news',
    keywords: ['mewgenics guide', 'mewgenics wiki', 'mewgenics breeding tool', 'mewgenics classes', 'mewgenics items'],
    imagePath: '/images/about.webp',
    type: 'website',
    locale: 'en_US',
  },
  social: {
    // 示例：'@mewgenicsguide'
    twitterHandle: undefined,
  },
}

