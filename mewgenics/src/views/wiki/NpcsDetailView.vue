<template>
  <main class="npcs-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki/npcs">{{ t('NpcsListPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ npc?.name ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="npc && npc.isPage">
          <h1 class="page-title">{{ npc.name }}</h1>
          <p class="page-subtitle">{{ npc.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ npc.publishDate }}</span>
          </p>
        </div>

        <div v-else-if="npc && !npc.isPage" class="detail-not-found">
          <h1 class="page-title">{{ npc.name }}</h1>
          <p class="page-subtitle">{{ t('NpcsDetailPage.noDetailSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/npcs')">{{ t('Common.backToNpcs') }}</button>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('NpcsDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">{{ t('NpcsDetailPage.notFoundSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/npcs')">{{ t('Common.backToNpcs') }}</button>
        </div>
      </div>
    </section>

    <section v-if="npc && npc.isPage" class="details-section">
      <div class="container">
        <div class="details-grid">
          <article class="details-main">
            <div class="details-html rich-html" v-html="npc.detailsHtml" />
          </article>

          <aside class="details-sidebar">
            <div class="sidebar-card">
              <div class="sidebar-art-wrap">
                <img class="sidebar-art" :src="npc.imageUrl" :alt="npc.imageAlt" loading="lazy" />
              </div>
              <p class="sidebar-flavor">{{ npc.description }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ npc.publishDate }}</p>
              <div v-if="npc.stats && Object.keys(npc.stats).length" class="sidebar-stats">
                <p v-for="(val, key) in npc.stats" :key="key" class="sidebar-stat">
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
import npcsData from '../../data/wiki/npcs.data'
import type { NpcEntry } from '../../types/wiki'
import { applySeo } from '../../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const list = npcsData as unknown as NpcEntry[]
const npc = computed(() => list.find((n) => n.slug === slug.value))

watchEffect(() => {
  if (npc.value) {
    applySeo({
      title: npc.value.seo?.title || `${npc.value.name} — Mewgenics Wiki`,
      description: npc.value.seo?.description || npc.value.description,
      keywords: npc.value.seo?.keywords || [],
      imageUrl: npc.value.imageUrl,
      canonicalPath: route.path,
      type: 'article',
    })
  } else {
    applySeo({
      title: 'NPC not found — Mewgenics Guide',
      canonicalPath: route.path,
      type: 'website',
    })
  }
})
</script>

<style scoped>
.npcs-detail-view {
  padding-bottom: 4rem;
}
</style>
