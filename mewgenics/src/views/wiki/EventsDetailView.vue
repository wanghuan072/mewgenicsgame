<template>
  <main class="events-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki/events">{{ t('EventsListPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ event?.name ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="event && event.isPage">
          <h1 class="page-title">{{ event.name }}</h1>
          <p class="page-subtitle">{{ event.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ event.publishDate }}</span>
            <span v-if="event.stats?.type" class="meta-item">Type: {{ event.stats.type }}</span>
          </p>
        </div>

        <div v-else-if="event && !event.isPage" class="detail-not-found">
          <h1 class="page-title">{{ event.name }}</h1>
          <p class="page-subtitle">{{ t('EventsDetailPage.noDetailSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/events')">{{ t('Common.backToEvents') }}</button>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('EventsDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">{{ t('EventsDetailPage.notFoundSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/events')">{{ t('Common.backToEvents') }}</button>
        </div>
      </div>
    </section>

    <section v-if="event && event.isPage" class="details-section">
      <div class="container">
        <div class="details-grid">
          <article class="details-main">
            <div class="details-html rich-html" v-html="event.detailsHtml" />
          </article>

          <aside class="details-sidebar">
            <div class="sidebar-card">
              <div class="sidebar-art-wrap">
                <img class="sidebar-art" :src="event.imageUrl" :alt="event.imageAlt" loading="lazy" />
              </div>
              <p class="sidebar-flavor">{{ event.description }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ event.publishDate }}</p>
              <div v-if="event.stats && Object.keys(event.stats).length" class="sidebar-stats">
                <p v-for="(val, key) in event.stats" :key="key" class="sidebar-stat">
                  <span class="sidebar-stat-key">{{ key }}:</span> {{ val }}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import eventsData from '../../data/wiki/events.data'
import type { EventEntry } from '../../types/wiki'
import { applySeo } from '../../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const list = eventsData as unknown as EventEntry[]
const event = computed(() => list.find((e) => e.slug === slug.value))

watchEffect(() => {
  if (event.value) {
    applySeo({
      title: event.value.seo?.title || `${event.value.name} — Mewgenics Wiki`,
      description: event.value.seo?.description || event.value.description,
      keywords: event.value.seo?.keywords || [],
      imageUrl: event.value.imageUrl,
      canonicalPath: route.path,
      type: 'article',
    })
  } else {
    applySeo({
      title: 'Event not found — Mewgenics Guide',
      canonicalPath: route.path,
      type: 'website',
    })
  }
})
</script>

<style scoped>
.events-detail-view {
  padding-bottom: 4rem;
}
</style>
