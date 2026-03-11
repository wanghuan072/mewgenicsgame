<template>
  <main class="mod-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/mods">{{ t('ModsPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ page?.title ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="page">
          <h1 class="page-title">{{ page.title }}</h1>
          <p class="page-subtitle">{{ page.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('Common.authorLabel') }}: {{ page.author }}</span>
            <span class="meta-sep">·</span>
            <span class="meta-item">{{ t('Common.publishedLabel') }}: {{ page.publishDate }}</span>
          </p>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('ModDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">
            {{ t('ModDetailPage.notFoundSubtitle') }}
          </p>
          <button class="btn btn--primary" type="button" @click="router.push('/mods')">{{ t('Common.backToMods') }}</button>
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
              <p class="sidebar-meta">{{ t('Common.authorLabel') }}: {{ page.author }}</p>
              <p class="sidebar-meta">{{ t('Common.publishedLabel') }}: {{ page.publishDate }}</p>
              <a
                class="sidebar-cta"
                :href="page.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t('Common.openOn', { source: page.sourceLabel }) }}
              </a>
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
import modsData from '../data/mods.data'
import type { ModPage } from '../types/modPage'
import { applySeo } from '../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const mods = modsData as ModPage[]
const page = computed(() => mods.find((p) => p.slug === slug.value))

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
.mod-detail-view {
  padding-bottom: 4rem;
}

.sidebar-cta {
  display: inline-block;
  margin-top: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}

.sidebar-cta:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
</style>
