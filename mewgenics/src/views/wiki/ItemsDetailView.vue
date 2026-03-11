<template>
  <main class="items-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki/items">{{ t('ItemsListPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ item?.name ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="item && item.isPage">
          <h1 class="page-title">{{ item.name }}</h1>
          <p class="page-subtitle">{{ item.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ item.publishDate }}</span>
          </p>
        </div>

        <div v-else-if="item && !item.isPage" class="detail-not-found">
          <h1 class="page-title">{{ item.name }}</h1>
          <p class="page-subtitle">{{ t('ItemsDetailPage.noDetailSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/items')">{{ t('Common.backToItems') }}</button>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('ItemsDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">{{ t('ItemsDetailPage.notFoundSubtitle') }}</p>
          <button class="btn btn--primary" type="button" @click="router.push('/wiki/items')">{{ t('Common.backToItems') }}</button>
        </div>
      </div>
    </section>

    <section v-if="item && item.isPage" class="details-section">
      <div class="container">
        <div class="details-grid">
          <article class="details-main">
            <div class="details-html rich-html" v-html="item.detailsHtml" />
          </article>

          <aside class="details-sidebar">
            <div class="sidebar-card">
              <div class="sidebar-art-wrap">
                <img class="sidebar-art" :src="item.imageUrl" :alt="item.imageAlt" loading="lazy" />
              </div>
              <p class="sidebar-flavor">{{ item.description }}</p>
              <p v-if="item.intro" class="sidebar-intro">{{ item.intro }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ item.publishDate }}</p>
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
import itemsData from '../../data/wiki/items.data'
import type { ItemEntry } from '../../types/wiki'
import { applySeo } from '../../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const list = itemsData as unknown as ItemEntry[]
const item = computed(() => list.find((i) => i.slug === slug.value))

watchEffect(() => {
  if (item.value) {
    applySeo({
      title: item.value.seo?.title || `${item.value.name} — Mewgenics Wiki`,
      description: item.value.seo?.description || item.value.description,
      keywords: item.value.seo?.keywords || [],
      imageUrl: item.value.imageUrl,
      canonicalPath: route.path,
      type: 'article',
    })
  } else {
    applySeo({
      title: 'Item not found — Mewgenics Guide',
      canonicalPath: route.path,
      type: 'website',
    })
  }
})
</script>

<style scoped>
.items-detail-view {
  padding-bottom: 4rem;
}
</style>
