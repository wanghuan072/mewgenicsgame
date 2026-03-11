import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreedingToolView from '../views/BreedingToolView.vue'
import ClassesView from '../views/ClassesView.vue'
import ClassDetailView from '../views/ClassDetailView.vue'
import GuidesView from '../views/GuidesView.vue'
import GuideDetailView from '../views/GuideDetailView.vue'
import ModsView from '../views/ModsView.vue'
import ModDetailView from '../views/ModDetailView.vue'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import WikiView from '../views/WikiView.vue'
import BossListView from '../views/wiki/BossListView.vue'
import BossDetailView from '../views/wiki/BossDetailView.vue'
import EventsListView from '../views/wiki/EventsListView.vue'
import EventsDetailView from '../views/wiki/EventsDetailView.vue'
import NpcsListView from '../views/wiki/NpcsListView.vue'
import NpcsDetailView from '../views/wiki/NpcsDetailView.vue'
import ItemsListView from '../views/wiki/ItemsListView.vue'
import ItemsDetailView from '../views/wiki/ItemsDetailView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/TermsOfServiceView.vue'
import CopyrightView from '../views/CopyrightView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import SearchView from '../views/SearchView.vue'
import { applySeo } from '../seo/runtime'
import i18n from '../i18n'

type RouteTdk = {
  title: string
  description: string
  keywords: string[] | string
}

/** Resolve TDK from i18n seo[seoKey] (Heartopia-style). */
function resolveSeoFromI18n(seoKey: string): RouteTdk | null {
  const locale = i18n.global.locale?.value ?? 'en'
  const messages = i18n.global.getLocaleMessage(locale) || i18n.global.getLocaleMessage('en')
  const seo = (messages as any)?.seo?.[seoKey]
  if (!seo?.title) return null
  const keywords = seo.keywords
  if (keywords !== undefined && typeof keywords !== 'string' && !Array.isArray(keywords)) return null
  return {
    title: seo.title,
    description: seo.description ?? '',
    keywords: keywords ?? [],
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { seoKey: 'home' },
    },
    {
      path: '/breeding-tool',
      name: 'breeding-tool',
      component: BreedingToolView,
      meta: { seoKey: 'breedingTool' },
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassesView,
      meta: { seoKey: 'classes' },
    },
    {
      path: '/classes/:slug',
      name: 'class-detail',
      component: ClassDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuidesView,
      meta: { seoKey: 'guides' },
    },
    {
      path: '/guides/:slug',
      name: 'guide-detail',
      component: GuideDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/mods',
      name: 'mods',
      component: ModsView,
      meta: { seoKey: 'mods' },
    },
    {
      path: '/mods/:slug',
      name: 'mod-detail',
      component: ModDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: { seoKey: 'news' },
    },
    {
      path: '/news/:slug',
      name: 'news-detail',
      component: NewsDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: { seoKey: 'wiki' },
    },
    {
      path: '/wiki/boss',
      name: 'wiki-boss',
      component: BossListView,
      meta: { seoKey: 'wikiBoss' },
    },
    {
      path: '/wiki/boss/:slug',
      name: 'wiki-boss-detail',
      component: BossDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/wiki/events',
      name: 'wiki-events',
      component: EventsListView,
      meta: { seoKey: 'wikiEvents' },
    },
    {
      path: '/wiki/events/:slug',
      name: 'wiki-events-detail',
      component: EventsDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/wiki/npcs',
      name: 'wiki-npcs',
      component: NpcsListView,
      meta: { seoKey: 'wikiNpcs' },
    },
    {
      path: '/wiki/npcs/:slug',
      name: 'wiki-npcs-detail',
      component: NpcsDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/wiki/items',
      name: 'wiki-items',
      component: ItemsListView,
      meta: { seoKey: 'wikiItems' },
    },
    {
      path: '/wiki/items/:slug',
      name: 'wiki-items-detail',
      component: ItemsDetailView,
      meta: { dynamicTDK: true },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView,
      meta: { seoKey: 'privacy' },
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsOfServiceView,
      meta: { seoKey: 'terms' },
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: { seoKey: 'copyright' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { seoKey: 'about' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { seoKey: 'contact' },
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: { seoKey: 'search' },
    },
  ],
})

router.afterEach((to) => {
  const isDynamic = Boolean(to.matched.some((r) => (r.meta as any)?.dynamicTDK))

  // 动态详情页：组件拿到数据后会更新 title/desc/keywords；这里先保证 canonical/OG url 同步路由
  if (isDynamic) {
    applySeo({ canonicalPath: to.path })
    return
  }

  // 静态页：从路由 meta.tdk 统一下发（包含 canonical/OG/Twitter）
  for (let i = to.matched.length - 1; i >= 0; i--) {
    const seoKey = (to.matched[i]?.meta as any)?.seoKey as string | undefined
    if (seoKey) {
      const tdk = resolveSeoFromI18n(seoKey)
      if (tdk) {
        applySeo({
          title: tdk.title,
          description: tdk.description,
          keywords: tdk.keywords,
          canonicalPath: to.path,
          type: 'website',
        })
        return
      }
    }

    const tdk = (to.matched[i]?.meta as any)?.tdk as RouteTdk | undefined
    if (!tdk) continue
    applySeo({
      title: tdk.title,
      description: tdk.description,
      keywords: tdk.keywords,
      canonicalPath: to.path,
      type: 'website',
    })
    return
  }
})

export default router
