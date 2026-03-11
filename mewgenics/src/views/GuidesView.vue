<template>
  <main class="guides-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('GuidesPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('GuidesPage.title') }}</h1>
        <p class="page-subtitle">{{ t('GuidesPage.subtitle') }}</p>
      </div>
    </section>

    <section class="guides-section">
      <div class="container">
        <h2 class="list-heading">{{ t('GuidesPage.listHeading') }}</h2>
        <div class="guides-list">
          <article v-for="guide in guides" :key="guide.slug" class="guide-article">
            <a
              class="article-link"
              :href="`/guides/${guide.slug}`"
              @click.prevent="router.push(`/guides/${guide.slug}`)"
            >
              <div class="article-image-wrap">
                <img
                  class="article-image"
                  :src="guide.imageUrl"
                  :alt="guide.imageAlt"
                  loading="lazy"
                />
                <span class="article-badge">{{ t('GuidesPage.badge') }}</span>
              </div>
              <div class="article-content">
                <h3 class="article-title">{{ guide.title }}</h3>
                <p class="article-date">{{ guide.publishDate }}</p>
                <p class="article-description">{{ guide.description }}</p>
                <span class="article-cta">{{ t('GuidesPage.cta') }}</span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="guides-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('GuidesPage.howToUseTitle') }}</h2>
          <p class="extra-text">{{ t('GuidesPage.howToUseText') }}</p>
          <ul class="extra-list">
            <li>{{ t('GuidesPage.list1') }}</li>
            <li>{{ t('GuidesPage.list2') }}</li>
            <li>{{ t('GuidesPage.list3') }}</li>
          </ul>
          <p class="extra-text extra-text--muted">{{ t('GuidesPage.note') }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import guidesData from '../data/guides.data'
import type { GuidePage } from '../types/guidePage'

const router = useRouter()
const { t } = useI18n()
const guides = guidesData as GuidePage[]
</script>

<style scoped>
.guides-view {
  padding-bottom: 4rem;
}

.guides-section {
  padding: 2.5rem 0 3rem;
}

@media (max-width: 768px) {
  .guides-section {
    padding: 1rem 0 1rem;
  }
}

.list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

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
  border-top: 4px solid var(--color-primary);
}

.article-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.article-link:hover {
  border-top-color: var(--color-primary-hover);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
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
  min-width: 0;
}

.article-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.article-date {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.article-description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-cta {
  font-weight: 600;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 1024px) {
  .guides-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .guides-list {
    grid-template-columns: minmax(0, 1fr);
  }
}

.guides-extra {
  padding: 0 0 3.5rem;
}

.extra-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.25rem 1.35rem;
}

.extra-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.extra-text {
  margin: 0;
  color: var(--color-text);
  line-height: 1.65;
}

.extra-text + .extra-text {
  margin-top: 0.75rem;
}

.extra-text--muted {
  color: var(--color-text-muted);
}

.extra-list {
  margin: 0.85rem 0;
  padding-left: 1.25rem;
  color: var(--color-text);
  line-height: 1.65;
}
</style>
