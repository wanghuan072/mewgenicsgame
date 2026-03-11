<template>
  <main class="guide-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/guides">{{ t('GuidesPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ page?.title ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="page">
          <h1 class="page-title">{{ page.title }}</h1>
          <p class="page-subtitle">{{ page.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ page.publishDate }}</span>
          </p>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('GuideDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">
            {{ t('GuideDetailPage.notFoundSubtitle') }}
          </p>
          <button class="btn btn--primary" type="button" @click="router.push('/guides')">{{ t('Common.backToGuides') }}</button>
        </div>
      </div>
    </section>

    <section v-if="page" class="details-section">
      <div class="container">
        <div class="details-grid">
          <article class="details-main">
            <div class="details-html rich-html" v-html="page.detailsHtml" />
          </article>

          <aside class="details-sidebar">
            <div class="sidebar-card">
              <div class="sidebar-art-wrap">
                <img class="sidebar-art" :src="page.imageUrl" :alt="page.imageAlt" loading="lazy" />
              </div>
              <p class="sidebar-flavor">{{ page.description }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ page.publishDate }}</p>
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
import guidesData from '../data/guides.data'
import type { GuidePage } from '../types/guidePage'
import { applySeo } from '../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const guides = guidesData as GuidePage[]
const page = computed(() => guides.find((p) => p.slug === slug.value))

watchEffect(() => {
  if (!page.value) return
  applySeo({
    title: page.value.seo.title || page.value.title,
    description: page.value.seo.description || page.value.description,
    keywords: page.value.seo.keywords || [],
    imageUrl: page.value.imageUrl,
    canonicalPath: route.path,
    type: 'article',
  })
})
</script>

<style scoped>
.guide-detail-view {
  padding-bottom: 4rem;
}
</style>
