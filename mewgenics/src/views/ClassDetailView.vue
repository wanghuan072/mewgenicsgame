<template>
  <main class="class-detail-view">
    <section class="detail-hero">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/classes">{{ t('ClassesPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ page?.title ?? t('Common.notFound') }}</span>
        </p>

        <div v-if="page">
          <h1 class="page-title">{{ page.title }}</h1>
          <p class="page-subtitle">{{ page.description }}</p>
          <p class="detail-meta">
            <span class="meta-item">{{ t('ClassDetailPage.publishDateLabel') }}: {{ page.publishDate }}</span>
          </p>
        </div>

        <div v-else class="detail-not-found">
          <h1 class="page-title">{{ t('ClassDetailPage.notFoundTitle') }}</h1>
          <p class="page-subtitle">
            {{ t('ClassDetailPage.notFoundSubtitle') }}
          </p>
          <button class="btn btn--primary" type="button" @click="router.push('/classes')">{{ t('Common.backToClasses') }}</button>
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

              <div v-if="page.stats" class="stats-panel">
                <div class="stats-row">
                  <div class="stats-box">
                    <h3 class="stats-title">{{ t('ClassDetailPage.buffs') }}</h3>
                    <ul class="stats-list">
                      <li v-for="buff in page.stats.buffs" :key="buff.label" class="stats-item">
                        <span class="stats-value">{{ buff.value }}</span>
                        <span class="stats-label">{{ buff.label }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="stats-box">
                    <h3 class="stats-title">{{ t('ClassDetailPage.debuffs') }}</h3>
                    <ul class="stats-list">
                      <li v-for="debuff in page.stats.debuffs" :key="debuff.label" class="stats-item">
                        <span class="stats-value">{{ debuff.value }}</span>
                        <span class="stats-label">{{ debuff.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="stats-box stats-box--full">
                  <h3 class="stats-title">{{ t('ClassDetailPage.levelUpStats') }}</h3>
                  <p class="stats-level-up">
                    {{ page.stats.levelUp.map((entry) => entry.label).join(', ') }}
                  </p>
                </div>
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
import classPagesData from '../data/classes.data'
import type { ClassPage } from '../types/classPage'
import { applySeo } from '../seo/runtime'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => String(route.params.slug || ''))
const classPages = classPagesData as ClassPage[]
const page = computed(() => classPages.find((p) => p.slug === slug.value))

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
.class-detail-view {
  padding-bottom: 4rem;
}

.stats-panel {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.stats-box {
  background: rgba(138, 175, 121, 0.14);
  border-radius: 12px;
  border: 1px solid rgba(138, 175, 121, 0.65);
  padding: 0.7rem 0.8rem;
}

.stats-box--full {
  margin-top: 0.1rem;
}

.stats-title {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
}

.stats-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stats-item {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: 0.9rem;
}

.stats-value {
  font-weight: 700;
}

.stats-label {
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.stats-level-up {
  font-size: 0.9rem;
}
</style>
