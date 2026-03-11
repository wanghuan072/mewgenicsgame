<template>
  <main class="mods-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('ModsPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('ModsPage.title') }}</h1>
        <p class="page-subtitle">{{ t('ModsPage.subtitle') }}</p>
      </div>
    </section>

    <section class="mods-section">
      <div class="container">
        <h2 class="list-heading">{{ t('ModsPage.listHeading') }}</h2>
        <div class="mods-list">
          <article v-for="mod in mods" :key="mod.slug" class="mod-article">
            <a
              class="article-link"
              :href="`/mods/${mod.slug}`"
              @click.prevent="router.push(`/mods/${mod.slug}`)"
            >
              <div class="article-image-wrap">
                <img class="article-image" :src="mod.imageUrl" :alt="mod.imageAlt" loading="lazy" />
                <span
                  class="article-badge"
                  :class="{ 'article-badge--workshop': mod.sourceLabel === 'Steam Workshop' }"
                >
                  {{ mod.sourceLabel }}
                </span>
              </div>
              <div class="article-content">
                <h3 class="article-title">{{ mod.title }}</h3>
                <p class="article-date">{{ mod.publishDate }}</p>
                <p class="article-description">{{ mod.description }}</p>
                <span class="article-cta">{{ t('ModsPage.cta') }}</span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="mods-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('ModsPage.aboutTitle') }}</h2>
          <p class="extra-text">
            {{ t('ModsPage.aboutText') }}
          </p>
          <ul class="extra-list">
            <li>{{ t('ModsPage.list1') }}</li>
            <li>{{ t('ModsPage.list2') }}</li>
            <li>{{ t('ModsPage.list3') }}</li>
          </ul>
          <p class="extra-text extra-text--muted">
            {{ t('ModsPage.note') }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import modsData from '../data/mods.data'
import type { ModPage } from '../types/modPage'

const router = useRouter()
const { t } = useI18n()
const mods = modsData as ModPage[]
</script>

<style scoped>
.mods-view {
  padding-bottom: 4rem;
}

.mods-section {
  padding: 2.5rem 0 3rem;
}

@media (max-width: 768px) {
  .mods-section {
    padding: 1rem 0 1rem;
  }
}

.list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

.mods-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mod-article {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  border-left: 4px solid var(--color-primary);
}

.article-link {
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 200px;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.article-link:hover {
  border-left-color: var(--color-primary-hover);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.article-image-wrap {
  position: relative;
  min-height: 200px;
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

.article-badge--workshop {
  background: #66b3cc;
}

.article-content {
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.article-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.25;
}

.article-date {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.article-description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
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

.mods-extra {
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

@media (max-width: 1024px) {
  .article-link {
    grid-template-columns: 1fr;
  }

  .article-image-wrap {
    min-height: 180px;
  }
}

@media (max-width: 768px) {
  .mods-list {
    gap: 1.5rem;
  }

  .article-content {
    padding: 1.25rem 1.5rem;
  }

  .article-title {
    font-size: 1.25rem;
  }
}
</style>
