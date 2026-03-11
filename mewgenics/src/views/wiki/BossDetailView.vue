<template>
  <main class="boss-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki/boss">{{ t('BossListPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ boss?.name ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="boss && boss.isPage">
          <h1 class="page-title">{{ boss.name }}</h1>
          <p class="page-subtitle">{{ boss.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ boss.publishDate }}</span>
            <span v-if="boss.stats?.area" class="meta-item">Area: {{ boss.stats.area }}</span>
          </p>
        </div>

        <div v-else-if="boss && !boss.isPage" class="detail-not-found">
          <h1 class="page-title">{{ boss.name }}</h1>
          <p class="page-subtitle">{{ t('BossDetailPage.noDetailSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/boss')">{{ t('Common.backToBosses') }}</button>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('BossDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">{{ t('BossDetailPage.notFoundSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/boss')">{{ t('Common.backToBosses') }}</button>
        </div>
      </div>
    </section>

    <section v-if="boss && boss.isPage" class="details-section">
      <div class="container">
        <div class="details-grid">
          <article class="details-main">
            <div class="details-html rich-html" v-html="boss.detailsHtml" />
          </article>

          <aside class="details-sidebar">
            <div class="sidebar-card">
              <div class="sidebar-art-wrap">
                <img class="sidebar-art" :src="boss.imageUrl" :alt="boss.imageAlt" loading="lazy" />
              </div>
              <p class="sidebar-flavor">{{ boss.description }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ boss.publishDate }}</p>
              <div v-if="boss.stats && Object.keys(boss.stats).length" class="sidebar-stats">
                <p v-for="(val, key) in boss.stats" :key="key" class="sidebar-stat">
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
import bossData from '../../data/wiki/boss.data'
import type { BossEntry } from '../../types/wiki'
import { applySeo } from '../../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const list = bossData as unknown as BossEntry[]
const boss = computed(() => list.find((b) => b.slug === slug.value))

watchEffect(() => {
  if (boss.value) {
    applySeo({
      title: boss.value.seo?.title || `${boss.value.name} — Mewgenics Wiki`,
      description: boss.value.seo?.description || boss.value.description,
      keywords: boss.value.seo?.keywords || [],
      imageUrl: boss.value.imageUrl,
      canonicalPath: route.path,
      type: 'article',
    })
  } else {
    applySeo({
      title: 'Boss not found — Mewgenics Guide',
      canonicalPath: route.path,
      type: 'website',
    })
  }
})
</script>

<style scoped>
.boss-detail-view {
  padding-bottom: 4rem;
}
</style>
