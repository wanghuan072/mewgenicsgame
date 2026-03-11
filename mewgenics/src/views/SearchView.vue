<template>
  <main class="search-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('SearchPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('SearchPage.title') }}</h1>
        <p class="page-subtitle">
          {{ t('SearchPage.subtitlePrefix') }}<span class="query-text">{{ query }}</span>{{ t('SearchPage.subtitleSuffix') }}
        </p>

        <form class="search-form" @submit.prevent="onSubmit">
          <input
            v-model="input"
            class="search-input"
            type="search"
            :placeholder="t('SearchPage.placeholder')"
          />
          <button class="btn btn--search" type="submit">{{ t('SearchPage.searchBtn') }}</button>
        </form>
      </div>
    </section>

    <section class="results-section">
      <div class="container">
        <p v-if="!query" class="empty-text">
          {{ t('SearchPage.emptyHint') }}
        </p>

        <p v-else-if="isEmpty" class="empty-text">
          {{ t('SearchPage.noResults') }}<span class="query-text">{{ query }}</span>{{ t('SearchPage.noResultsSuffix') }}
        </p>

        <div v-else class="results-grid">
          <!-- Guides style -->
          <section v-if="guidesResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockGuides') }}</h2>
            <div class="guides-list">
              <article v-for="guide in guidesResults" :key="guide.slug" class="guide-article">
                <a
                  class="article-link"
                  :href="`/guides/${guide.slug}`"
                  @click.prevent="router.push(`/guides/${guide.slug}`)"
                >
                  <div class="article-image-wrap">
                    <img class="article-image" :src="guide.imageUrl" :alt="guide.imageAlt" loading="lazy" />
                    <span class="article-badge">{{ t('GuidesPage.badge') }}</span>
                  </div>
                  <div class="article-content">
                    <h3 class="article-title">{{ guide.title }}</h3>
                    <p class="article-date">{{ guide.publishDate }}</p>
                    <p class="article-description">{{ guide.description }}</p>
                    <span class="article-cta">{{ t('SearchPage.readGuide') }}</span>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <!-- Classes style -->
          <section v-if="classResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockClasses') }}</h2>
            <ul class="classes-list" role="list">
              <li v-for="(cls, i) in classResults" :key="cls.slug" class="class-row">
                <a
                  class="row-link"
                  :href="`/classes/${cls.slug}`"
                  @click.prevent="router.push(`/classes/${cls.slug}`)"
                >
                  <span class="row-index" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
                  <img class="row-thumb" :src="cls.imageUrl" :alt="cls.imageAlt" loading="lazy" />
                  <div class="row-body">
                    <h3 class="row-title">{{ cls.title }}</h3>
                    <p class="row-desc">{{ cls.description }}</p>
                    <span class="row-meta">{{ cls.publishDate }}</span>
                  </div>
                  <span class="row-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </section>

          <!-- Mods style -->
          <section v-if="modsResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockMods') }}</h2>
            <div class="mods-list">
              <article v-for="mod in modsResults" :key="mod.slug" class="mod-article">
                <a
                  class="mod-link"
                  :href="`/mods/${mod.slug}`"
                  @click.prevent="router.push(`/mods/${mod.slug}`)"
                >
                  <div class="mod-image-wrap">
                    <img class="mod-image" :src="mod.imageUrl" :alt="mod.imageAlt" loading="lazy" />
                  </div>
                  <div class="mod-content">
                    <h3 class="mod-title">{{ mod.title }}</h3>
                    <p class="mod-desc">{{ mod.description }}</p>
                    <span class="mod-cta">{{ t('SearchPage.viewModDetails') }}</span>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <!-- News style -->
          <section v-if="newsResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockNews') }}</h2>
            <div class="news-timeline">
              <article v-for="item in newsResults" :key="item.slug" class="timeline-item">
                <a
                  class="timeline-link"
                  :href="`/news/${item.slug}`"
                  @click.prevent="router.push(`/news/${item.slug}`)"
                >
                  <time class="timeline-date" :datetime="item.publishDate">
                    {{ item.publishDate }}
                  </time>
                  <div class="timeline-dot" aria-hidden="true" />
                  <div class="timeline-content">
                    <h3 class="timeline-title">{{ item.title }}</h3>
                    <p class="timeline-desc">{{ item.description }}</p>
                    <span class="timeline-cta">{{ t('SearchPage.readMore') }}</span>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <!-- Wiki: Boss list style -->
          <section v-if="bossResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockBosses') }}</h2>
            <ul class="boss-grid" role="list">
              <li v-for="entry in bossResults" :key="entry.id" class="boss-card-wrap">
                <a
                  v-if="entry.isPage"
                  class="boss-card"
                  :href="`/wiki/boss/${entry.slug}`"
                  @click.prevent="router.push(`/wiki/boss/${entry.slug}`)"
                >
                  <div class="boss-card-img-wrap">
                    <img
                      v-if="entry.imageUrl"
                      class="boss-card-img"
                      :src="entry.imageUrl"
                      :alt="entry.imageAlt"
                      loading="lazy"
                    />
                    <div v-else class="boss-card-img boss-card-img--placeholder" aria-hidden="true" />
                  </div>
                  <div class="boss-card-body">
                    <h3 class="boss-card-name">{{ entry.name }}</h3>
                    <p class="boss-card-desc">{{ entry.description }}</p>
                    <span class="boss-card-cta">{{ t('SearchPage.viewDetails') }}</span>
                  </div>
                </a>
                <div v-else class="boss-card boss-card--plain">
                  <div class="boss-card-img-wrap">
                    <img
                      v-if="entry.imageUrl"
                      class="boss-card-img"
                      :src="entry.imageUrl"
                      :alt="entry.imageAlt"
                      loading="lazy"
                    />
                    <div v-else class="boss-card-img boss-card-img--placeholder" aria-hidden="true" />
                  </div>
                  <div class="boss-card-body">
                    <h3 class="boss-card-name">{{ entry.name }}</h3>
                    <p class="boss-card-desc">{{ entry.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Wiki: Items style -->
          <section v-if="itemsResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockItems') }}</h2>
            <ul class="entry-list" role="list">
              <li v-for="entry in itemsResults" :key="entry.id" class="entry-row">
                <a
                  v-if="entry.isPage"
                  class="entry-link"
                  :href="`/wiki/items/${entry.slug}`"
                  @click.prevent="router.push(`/wiki/items/${entry.slug}`)"
                >
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p v-if="entry.description" class="entry-desc">{{ entry.description }}</p>
                    <p v-if="entry.intro" class="entry-intro">{{ entry.intro }}</p>
                    <span class="entry-cta">{{ t('SearchPage.viewDetails') }}</span>
                  </div>
                </a>
                <div v-else class="entry-link entry-link--plain">
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p v-if="entry.description" class="entry-desc">{{ entry.description }}</p>
                    <p v-if="entry.intro" class="entry-intro">{{ entry.intro }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Wiki: NPCs style -->
          <section v-if="npcsResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockNpcs') }}</h2>
            <ul class="entry-list" role="list">
              <li v-for="entry in npcsResults" :key="entry.id" class="entry-row">
                <a
                  v-if="entry.isPage"
                  class="entry-link"
                  :href="`/wiki/npcs/${entry.slug}`"
                  @click.prevent="router.push(`/wiki/npcs/${entry.slug}`)"
                >
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p class="entry-desc">{{ entry.description }}</p>
                    <span class="entry-cta">{{ t('SearchPage.viewDetails') }}</span>
                  </div>
                </a>
                <div v-else class="entry-link entry-link--plain">
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p class="entry-desc">{{ entry.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Wiki: Events style -->
          <section v-if="eventsResults.length" class="block">
            <h2 class="block-title">{{ t('SearchPage.blockEvents') }}</h2>
            <ul class="entry-list" role="list">
              <li v-for="entry in eventsResults" :key="entry.id" class="entry-row">
                <a
                  v-if="entry.isPage"
                  class="entry-link"
                  :href="`/wiki/events/${entry.slug}`"
                  @click.prevent="router.push(`/wiki/events/${entry.slug}`)"
                >
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p class="entry-desc">{{ entry.description }}</p>
                    <span class="entry-cta">{{ t('SearchPage.viewDetails') }}</span>
                  </div>
                </a>
                <div v-else class="entry-link entry-link--plain">
                  <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                  <div class="entry-body">
                    <h3 class="entry-name">{{ entry.name }}</h3>
                    <p class="entry-desc">{{ entry.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import guidesData from '../data/guides.data'
import classesData from '../data/classes.data'
import modsData from '../data/mods.data'
import newsData from '../data/news.data'
import bossData from '../data/wiki/boss.data'
import itemsData from '../data/wiki/items.data'
import npcsData from '../data/wiki/npcs.data'
import eventsData from '../data/wiki/events.data'
import type { GuidePage } from '../types/guidePage'
import type { ClassPage } from '../types/classPage'
import type { ModPage } from '../types/modPage'
import type { NewsPage } from '../types/newsPage'
import type { BossEntry, ItemEntry, NpcEntry, EventEntry } from '../types/wiki'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const input = ref(String(route.query.q || ''))
const query = computed(() => input.value.trim())

function normalize(value: string | undefined | null): string {
  return (value || '').toLowerCase()
}

function match(haystack: string | undefined | null, needle: string): boolean {
  if (!needle) return false
  return normalize(haystack).includes(needle)
}

const guides = guidesData as GuidePage[]
const classPages = classesData as ClassPage[]
const mods = modsData as ModPage[]
const news = newsData as NewsPage[]
const bosses = bossData as unknown as BossEntry[]
const items = itemsData as unknown as ItemEntry[]
const npcs = npcsData as unknown as NpcEntry[]
const events = eventsData as unknown as EventEntry[]

const guidesResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return guides.filter((g) => match(g.title, q) || match(g.description, q) || match(g.slug, q))
})

const classResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return classPages.filter((c) => match(c.title, q) || match(c.description, q) || match(c.slug, q))
})

const modsResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return mods.filter((m) => match(m.title, q) || match(m.description, q) || match(m.slug, q))
})

const newsResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return news.filter((n) => match(n.title, q) || match(n.description, q) || match(n.slug, q))
})

const bossResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return bosses.filter((b) => match(b.name, q) || match(b.description, q) || match(b.slug, q))
})

const itemsResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return items.filter((i) => match(i.name, q) || match(i.description, q) || match(i.slug, q))
})

const npcsResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return npcs.filter((n) => match(n.name, q) || match(n.description, q) || match(n.slug, q))
})

const eventsResults = computed(() => {
  const q = normalize(query.value)
  if (!q) return []
  return events.filter((e) => match(e.name, q) || match(e.description, q) || match(e.slug, q))
})

const isEmpty = computed(
  () =>
    query.value &&
    !guidesResults.value.length &&
    !classResults.value.length &&
    !modsResults.value.length &&
    !newsResults.value.length &&
    !bossResults.value.length &&
    !itemsResults.value.length &&
    !npcsResults.value.length &&
    !eventsResults.value.length,
)

function onSubmit() {
  const q = query.value
  if (!q) return
  router.push({ path: '/search', query: { q } })
}

watchEffect(() => {
  // 当路由中的 q 改变时，仅同步到输入框；SEO 由路由 meta.tdk 统一处理
  const currentQ = String(route.query.q || '')
  input.value = currentQ
})
</script>

<style scoped>
.search-view {
  padding-bottom: 4rem;
}

.results-section {
  padding: 2rem 0 3rem;
}

.search-form {
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
  max-width: 520px;
}

@media (max-width: 768px) {
  .results-section {
    padding: 1rem 0 1rem;
  }
}

.search-input {
  flex: 1;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: rgba(15, 14, 18, 0.85);
  padding: 0.7rem 1rem;
  color: var(--color-text);
}

.btn--search {
  border-radius: 999px;
  padding-inline: 1.25rem;
}

.query-text {
  font-weight: 600;
}

.empty-text {
  margin: 0;
  color: var(--color-text-muted);
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.block-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin: 0 0 0.75rem;
}

/* Reuse styles inspired by existing views (simplified) */

.guides-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.guide-article {
  background: var(--color-bg-card);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.article-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.article-image-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--color-bg);
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.6rem;
  background: var(--color-primary);
  color: var(--color-bg);
  border-radius: 6px;
}

.article-content {
  padding: 1.15rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

.article-date {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.article-description {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.article-cta {
  font-weight: 600;
  color: var(--color-primary);
}

/* Classes */
.classes-list {
  display: flex;
  flex-direction: column;
}

.class-row {
  border-bottom: 1px solid var(--color-border);
}

.row-link {
  display: grid;
  grid-template-columns: 2.5rem 80px 1fr 2rem;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
}

.row-index {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.row-thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.row-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.row-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
}

.row-meta {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.row-arrow {
  font-size: 1.25rem;
  color: var(--color-text-muted);
}

/* Mods (simplified from ModsView) */
.mods-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mod-article {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
}

.mod-link {
  display: grid;
  grid-template-columns: 260px 1fr;
  text-decoration: none;
  color: inherit;
}

.mod-image-wrap {
  min-height: 180px;
  background: var(--color-bg);
}

.mod-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mod-content {
  padding: 1.5rem 1.75rem;
}

.mod-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.mod-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
}

.mod-cta {
  font-weight: 600;
  color: var(--color-primary);
}

/* News (timeline simplified) */
.news-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.timeline-item {
  position: relative;
}

.timeline-link {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  width: 90px;
}

.timeline-content {
  flex: 1;
}

.timeline-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.timeline-desc {
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.timeline-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}

/* Boss grid (simplified from BossListView) */
.boss-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.boss-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: var(--color-bg-card);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.boss-card-img-wrap {
  aspect-ratio: 1/1;
  background: var(--color-bg-elevated);
}

.boss-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.boss-card-body {
  padding: 0.9rem;
}

.boss-card-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.boss-card-desc {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
}

.boss-card-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}

/* Generic wiki entry list */
.entry-list {
  display: flex;
  flex-direction: column;
}

.entry-row {
  border-bottom: 1px solid var(--color-border);
}

.entry-link {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
}

.entry-thumb {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.entry-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.entry-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 0.25rem;
}

.entry-intro {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 0.25rem;
}

.entry-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .guides-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .boss-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mod-link {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .guides-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .boss-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .entry-link {
    grid-template-columns: 1fr;
  }

  .mod-content {
    padding: 1.25rem 1.5rem;
  }
}
</style>

