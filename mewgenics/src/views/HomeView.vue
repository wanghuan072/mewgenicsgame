<template>
  <div class="home-view">
    <!-- Hero: SEO-focused, video, search+button -->
    <section class="hero-section">
      <div class="hero-glow" aria-hidden="true" />
      <div class="container">
        <div class="hero-inner">
          <div class="hero-left">
            <p class="hero-label">{{ t('HomePage.hero.label') }}</p>
            <h1 class="hero-title">
              <span class="hero-title-gradient">{{ t('HomePage.hero.titleGame') }}</span> {{ t('HomePage.hero.titleRest') }}
            </h1>
            <p class="hero-subtitle" v-html="t('HomePage.hero.subtitle')" />
            <div class="hero-ctas">
              <a href="/breeding-tool" class="btn btn--primary">{{ t('HomePage.hero.btnCalculator') }}</a>
              <a href="/wiki" class="btn btn--secondary">{{ t('HomePage.hero.btnWiki') }}</a>
              <a href="/classes" class="btn btn--secondary">{{ t('HomePage.hero.btnClasses') }}</a>
            </div>
            <div class="hero-search-wrap">
              <form class="search-form" @submit.prevent="onSearch">
                <input
                  v-model="searchQuery"
                  type="search"
                  class="global-search"
                  :placeholder="t('HomePage.hero.searchPlaceholder')"
                  :aria-label="t('HomePage.hero.searchAriaLabel')"
                />
                <button type="submit" class="btn btn--search">{{ t('HomePage.hero.searchBtn') }}</button>
              </form>
            </div>
          </div>
          <div class="hero-right">
            <div class="hero-video-wrap">
              <button
                v-if="!isTrailerPlaying"
                type="button"
                class="hero-video-mask"
                :aria-label="t('HomePage.hero.videoPlayAria')"
                @click="isTrailerPlaying = true"
              >
                <img class="hero-video-thumb" src="/images/video-bg.webp" :alt="t('HomePage.hero.videoThumbAlt')" />
                <span class="hero-video-shade" aria-hidden="true"></span>
                <span class="hero-video-play" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 8.5v7l6-3.5-6-3.5z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      opacity="0.7"
                    />
                  </svg>
                </span>
              </button>

              <iframe
                v-else
                class="hero-video"
                src="https://www.youtube.com/embed/YyWcrDKg9hA"
                :title="t('HomePage.hero.videoTitle')"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <p class="hero-video-caption" v-html="t('HomePage.hero.videoCaption')" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access: 4 items with SVG icons -->
    <section class="quick-access-section">
      <div class="container">
        <div class="quick-access-content">
          <h2 class="section-title">{{ t('HomePage.quickAccess.title') }}</h2>
          <div class="quick-access-grid">
            <a href="/classes" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.classesLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.classesDesc') }}</span>
            </a>
            <a href="/wiki/items" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.equipmentLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.equipmentDesc') }}</span>
            </a>
            <a href="/wiki/boss" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2C7 2 4 6 4 10c0 4 2 8 8 8s8-4 8-8c0-4-3-8-8-8z" />
                  <path d="M9 10h.01M15 10h.01M9.5 14a3.5 3.5 0 0 1 5 0" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.bestiaryLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.bestiaryDesc') }}</span>
            </a>
            <a href="/wiki/npcs" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.npcsLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.npcsDesc') }}</span>
            </a>
            <a href="/wiki/events" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.eventsLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.eventsDesc') }}</span>
            </a>
            <a href="/guides" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M8 6h8" />
                  <path d="M8 10h8" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.guidesLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.guidesDesc') }}</span>
            </a>
            <a href="/mods" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l2.2 4.5L19 7.3l-3.5 3.4.8 4.8L12 13.8 7.7 15.5l.8-4.8L5 7.3l4.8-.8L12 2z" />
                  <path d="M7 22h10" />
                </svg>
              </span>
              <h3 class="quick-card-label">{{ t('HomePage.quickAccess.modsLabel') }}</h3>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.modsDesc') }}</span>
            </a>
            <a href="/breeding-tool" class="quick-card">
              <span class="quick-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19c3.5-7 12.5-7 16 0" />
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </span>
              <span class="quick-card-label">{{ t('HomePage.quickAccess.breedingToolLabel') }}</span>
              <span class="quick-card-desc">{{ t('HomePage.quickAccess.breedingToolDesc') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Spotlight: Calculator with more copy -->
    <section class="feature-spotlight-section">
      <div class="container">
        <div class="feature-spotlight-content">
          <div class="spotlight-image">
            <img src="/images/about.webp" :alt="t('HomePage.spotlight.imageAlt')" />
          </div>
          <div class="spotlight-text">
            <p class="section-label">{{ t('HomePage.spotlight.sectionLabel') }}</p>
            <h2 class="spotlight-title">{{ t('HomePage.spotlight.title') }}</h2>
            <p class="spotlight-desc">{{ t('HomePage.spotlight.desc') }}</p>
            <p class="spotlight-desc-secondary">{{ t('HomePage.spotlight.descSecondary') }}</p>
            <a href="/breeding-tool" class="btn btn--primary">{{ t('HomePage.spotlight.btn') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Now: from data, isNow only, image top / text below -->
    <section class="trending-section">
      <div class="container">
        <div class="trending-content">
          <h2 class="section-title">{{ t('HomePage.trending.title') }}</h2>
          <div class="trending-grid">
            <a
              v-for="item in trendingItems"
              :key="item.id"
              :href="item.link"
              class="trending-card"
              :target="isExternalLink(item.link) ? '_blank' : undefined"
              :rel="isExternalLink(item.link) ? 'noopener noreferrer' : undefined"
            >
              <div class="trending-card-image">
                <img
                  :src="item.imageUrl || defaultTrendingImage"
                  :alt="item.imageAlt || item.title"
                  loading="lazy"
                />
              </div>
              <div class="trending-card-body">
                <h3 class="trending-card-title">{{ item.title }}</h3>
                <p class="trending-card-desc">{{ item.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ: more questions, all expanded (no dropdown) -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-content">
          <h2 class="section-title">{{ t('HomePage.faq.title') }}</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q1') }}</h3>
              <p class="faq-a">
                {{ t('HomePage.faq.a1Intro') }}
                <a class="inline-link" href="/news/mewgenics-console-release-ps5-switch-roadmap">{{ t('HomePage.faq.a1Link') }}</a>.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q2') }}</h3>
              <p class="faq-a">
                {{ t('HomePage.faq.a2Intro') }}
                <a class="inline-link" href="/news/mewgenics-console-release-ps5-switch-roadmap">{{ t('HomePage.faq.a2Link') }}</a>
                {{ t('HomePage.faq.a2End') }}
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q3') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a3') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q4') }}</h3>
              <p class="faq-a" v-html="t('HomePage.faq.a4')" />
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q5') }}</h3>
              <p class="faq-a" v-html="t('HomePage.faq.a5')" />
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q6') }}</h3>
              <p class="faq-a">{{ t('HomePage.faq.a6') }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-q">{{ t('HomePage.faq.q7') }}</h3>
              <p class="faq-a" v-html="t('HomePage.faq.a7')" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import guidesData from '../data/guides.data'
import newsData from '../data/news.data'
import modsData from '../data/mods.data'
import classesData from '../data/classes.data'
import itemsData from '../data/wiki/items.data'
import type { GuidePage } from '../types/guidePage'
import type { NewsPage } from '../types/newsPage'
import type { ModPage } from '../types/modPage'
import type { ClassPage } from '../types/classPage'
import type { ItemEntry } from '../types/wiki'

const { t } = useI18n()

const searchQuery = ref('')
const isTrailerPlaying = ref(false)

const defaultTrendingImage = 'https://picsum.photos/seed/mewgenics-default/400/260'

type TrendingItem = {
  id: string
  title: string
  description: string
  link: string
  imageUrl?: string
  imageAlt?: string
}

const trendingItems = computed<TrendingItem[]>(() => {
  const items: TrendingItem[] = []

  for (const g of guidesData as (GuidePage & { isNow?: boolean })[]) {
    if (!g.isNow) continue
    items.push({
      id: `guide:${g.slug}`,
      title: g.title,
      description: g.description,
      link: `/guides/${g.slug}`,
      imageUrl: g.imageUrl,
      imageAlt: g.imageAlt,
    })
  }

  for (const n of newsData as (NewsPage & { isNow?: boolean })[]) {
    if (!n.isNow) continue
    items.push({
      id: `news:${n.slug}`,
      title: n.title,
      description: n.description,
      link: `/news/${n.slug}`,
      imageUrl: n.imageUrl,
      imageAlt: n.imageAlt,
    })
  }

  for (const c of classesData as (ClassPage & { isNow?: boolean })[]) {
    if (!c.isNow) continue
    items.push({
      id: `class:${c.slug}`,
      title: c.title,
      description: c.description,
      link: `/classes/${c.slug}`,
      imageUrl: c.imageUrl,
      imageAlt: c.imageAlt,
    })
  }

  for (const m of modsData as (ModPage & { isNow?: boolean })[]) {
    if (!m.isNow) continue
    items.push({
      id: `mod:${m.slug}`,
      title: m.title,
      description: m.description,
      link: `/mods/${m.slug}`,
      imageUrl: m.imageUrl,
      imageAlt: m.imageAlt,
    })
  }

  for (const i of itemsData as (ItemEntry & { isNow?: boolean })[]) {
    if (!i.isNow) continue
    items.push({
      id: `item:${i.slug}`,
      title: i.name,
      description: i.description,
      link: `/wiki/items/${i.slug}`,
      imageUrl: i.imageUrl,
      imageAlt: i.imageAlt,
    })
  }

  return items
})

function isExternalLink(link: string) {
  return /^https?:\/\//i.test(link)
}

function onSearch() {
  const q = searchQuery.value?.trim()
  if (!q) return
  window.location.href = `/search?q=${encodeURIComponent(q)}`
}
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-title {
  position: relative;
  font-size: clamp(1.75rem, 4.5vw, 2.5rem);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 32px var(--color-glow-soft);
}

.section-title::after {
  content: '';
  display: block;
  width: min(220px, 70%);
  height: 3px;
  margin: 0.85rem auto 0;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(232, 184, 74, 0.95) 42%,
    rgba(232, 184, 74, 0.28) 72%,
    transparent 100%
  );
  box-shadow: 0 0 22px rgba(232, 184, 74, 0.25);
}

/* ---------- Hero ---------- */
.hero-section {
  position: relative;
  padding: 4rem 0;
  background: var(--gradient-hero);
  overflow: hidden;
  border-bottom: 1px solid rgba(61, 56, 71, 0.65);
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-glow);
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 68vh;
  position: relative;
  z-index: 1;
}

.hero-label {
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(232, 184, 74, 0.5);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.15rem, 4.8vw, 3.6rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-shadow: 0 0 34px rgba(0, 0, 0, 0.45);
}

.hero-title-gradient {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 0 24px rgba(232, 184, 74, 0.35));
}

.hero-title-gradient::after {
  -webkit-text-fill-color: initial;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 520px;
}

.hero-subtitle strong {
  color: var(--color-text);
  font-weight: 600;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.search-form {
  display: flex;
  gap: 0.5rem;
  max-width: 100%;
}

.global-search {
  flex: 1;
  min-width: 0;
  padding: 0.85rem 1rem;
  font-size: 0.9375rem;
  border: 1px solid rgba(61, 56, 71, 0.95);
  border-radius: 10px;
  background: var(--color-bg-elevated);
  color: var(--color-text);
}

.global-search::placeholder {
  color: var(--color-text-muted);
}

.global-search:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-accent);
}

.btn--search {
  padding: 0.85rem 1.35rem;
  font-size: 0.9375rem;
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;
  background: var(--color-cta);
  color: #0f0e12;
  border: none;
  white-space: nowrap;
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.btn--search:hover {
  background: var(--color-cta-hover);
  box-shadow: 0 0 20px rgba(232, 184, 74, 0.4);
}

.hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.hero-video-wrap {
  position: relative;
  width: 100%;
  max-width: 560px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  background: var(--color-bg);
}

.hero-video {
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  border: 0;
}

.hero-video-mask {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: var(--color-primary);
}

.hero-video-mask:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.hero-video-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  filter: saturate(1.05) contrast(1.02);
}

.hero-video-shade {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 45%, rgba(232, 184, 74, 0.12), transparent 55%),
    linear-gradient(180deg, rgba(15, 14, 18, 0.05), rgba(15, 14, 18, 0.55));
}

.hero-video-play {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.hero-video-play svg {
  width: 72px;
  height: 72px;
  background: rgba(15, 14, 18, 0.55);
  border: 1px solid rgba(232, 184, 74, 0.45);
  border-radius: 999px;
  padding: 16px;
  box-shadow: 0 0 36px rgba(232, 184, 74, 0.22);
  transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base);
}

.hero-video-mask:hover .hero-video-play svg {
  transform: scale(1.03);
  background: rgba(15, 14, 18, 0.35);
  box-shadow: 0 0 48px rgba(232, 184, 74, 0.28);
}

.hero-video-caption {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
}

.hero-video-caption strong {
  color: var(--color-primary);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.35rem;
  font-size: 0.9375rem;
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--transition-base), color var(--transition-base), box-shadow var(--transition-base),
    border-color var(--transition-base), transform var(--transition-base);
}

.btn--primary {
  background: linear-gradient(180deg, rgba(240, 201, 106, 1) 0%, rgba(212, 160, 44, 1) 100%);
  color: #0f0e12;
  border: 1px solid rgba(232, 184, 74, 0.55);
  box-shadow: 0 18px 60px rgba(232, 184, 74, 0.16), 0 0 26px rgba(232, 184, 74, 0.22);
}

.btn--primary:hover {
  background: linear-gradient(180deg, rgba(255, 236, 169, 1) 0%, rgba(232, 184, 74, 1) 100%);
  box-shadow: 0 22px 72px rgba(232, 184, 74, 0.18), 0 0 34px rgba(232, 184, 74, 0.28);
  transform: translateY(-1px);
}

.btn--secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(61, 56, 71, 0.95);
}

.btn--secondary:hover {
  background: rgba(232, 184, 74, 0.14);
  border-color: rgba(232, 184, 74, 0.65);
  box-shadow: 0 0 0 3px rgba(232, 184, 74, 0.1);
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ---------- Quick Access ---------- */
.quick-access-section {
  padding: 3rem 0;
  background: var(--gradient-section);
}

@media (max-width: 768px) {
  .quick-access-section {
    padding: 1rem 0;
  }
}

.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.quick-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background: radial-gradient(circle at top, rgba(232, 184, 74, 0.12), transparent 55%),
    var(--color-bg-card);
  border: 1px solid rgba(61, 56, 71, 0.95);
  border-radius: 14px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  transition: border-color var(--transition-base), background var(--transition-base), box-shadow var(--transition-base),
    transform var(--transition-base);
}

.quick-card:hover {
  border-color: rgba(232, 184, 74, 0.85);
  background: var(--color-bg-elevated);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28), 0 0 34px rgba(232, 184, 74, 0.12);
  transform: translateY(-2px);
}

.quick-card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.quick-card-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.quick-card-label {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.quick-card-desc {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

/* ---------- Feature Spotlight ---------- */
.feature-spotlight-section {
  padding: 3rem 0;
  background: linear-gradient(180deg, #16141c 0%, #0f0e12 100%);
}

@media (max-width: 768px) {
  .feature-spotlight-section {
    padding: 1rem 0;
  }
}

.feature-spotlight-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.spotlight-image {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.spotlight-image img {
  width: 100%;
  display: block;
}

.spotlight-title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: var(--color-text);
  text-shadow: 0 0 24px var(--color-glow-soft);
}

.spotlight-desc {
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
  line-height: 1.65;
  font-size: 0.9375rem;
}

.spotlight-desc-secondary {
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 0.875rem;
  opacity: 0.9;
}

/* ---------- Trending ---------- */
.trending-section {
  padding: 3rem 0;
  background: var(--gradient-section);
}

@media (max-width: 768px) {
  .trending-section {
    padding: 1rem 0;
  }
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.trending-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border: 1px solid rgba(61, 56, 71, 0.95);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
}

.trending-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28), 0 0 34px rgba(232, 184, 74, 0.12);
  transform: translateY(-2px);
}

.trending-card-image {
  aspect-ratio: 400/260;
  overflow: hidden;
  background: var(--color-bg);
}

.trending-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trending-card-body {
  padding: 1rem;
}

.trending-card-title {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  margin-bottom: 0.35rem;
  line-height: 1.3;
  color: var(--color-text);
}

.trending-card-desc {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ---------- FAQ ---------- */
.faq-section {
  padding: 3rem 0;
  background: var(--gradient-section);
}

@media (max-width: 768px) {
  .faq-section {
    padding: 1rem 0;
  }
}

.faq-list {
  width: 100%;
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  margin-bottom: 1rem;
  background: var(--color-bg-card);
  padding: 1.25rem 1.5rem;
}

.faq-q {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.faq-a {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.inline-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.inline-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 2rem;
  }

  .hero-left {
    text-align: center;
  }

  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-ctas {
    justify-content: center;
  }

  .search-form {
    max-width: 480px;
    margin: 0 auto;
  }

  .hero-video-wrap {
    max-width: 100%;
  }

  .quick-access-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-spotlight-content {
    grid-template-columns: 1fr;
  }

  .trending-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-ctas {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .search-form {
    flex-direction: column;
  }

  .btn--search {
    width: 100%;
  }

  .quick-access-grid {
    grid-template-columns: 1fr;
  }

  .trending-grid {
    grid-template-columns: 1fr;
  }
}
</style>
