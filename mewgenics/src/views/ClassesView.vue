<template>
  <main class="classes-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('ClassesPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('ClassesPage.title') }}</h1>
        <p class="page-subtitle">
          {{ t('ClassesPage.subtitleIntro') }}
          <a class="inline-link" href="/breeding-tool">Breeding Tool</a> and
          <a class="inline-link" href="/guides">Guides</a>
          {{ t('ClassesPage.subtitleEnd') }}
        </p>
      </div>
    </section>

    <section class="classes-section">
      <div class="container">
        <h2 class="list-heading">{{ t('ClassesPage.listHeading') }}</h2>
        <ul class="classes-list" role="list">
          <li v-for="(cls, i) in classPages" :key="cls.slug" class="class-row">
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
      </div>
    </section>

    <section class="classes-extra">
      <div class="container">
        <article class="extra-card">
            <h2 class="extra-title">{{ t('ClassesPage.whatAreTitle') }}</h2>
            <p class="extra-text" v-html="t('ClassesPage.whatAreText')" />
            <p class="extra-text extra-text--muted">
              {{ t('ClassesPage.collarlessTip') }}
            </p>
          </article>

        <aside class="extra-card extra-card--faq">
            <h2 class="extra-title">{{ t('ClassesPage.faqTitle') }}</h2>

            <div class="faq">
              <div class="faq-item">
              <h3 class="faq-q">{{ t('ClassesPage.faq1q') }}</h3>
              <p class="faq-a">{{ t('ClassesPage.faq1a') }}</p>
            </div>

              <div class="faq-item">
                <h3 class="faq-q">{{ t('ClassesPage.faq2q') }}</h3>
                <p class="faq-a">{{ t('ClassesPage.faq2a') }}</p>
              </div>

              <div class="faq-item">
              <h3 class="faq-q">{{ t('ClassesPage.faq3q') }}</h3>
              <p class="faq-a" v-html="t('ClassesPage.faq3a')" />
            </div>

              <div class="faq-item">
              <h3 class="faq-q">{{ t('ClassesPage.faq4q') }}</h3>
              <p class="faq-a">{{ t('ClassesPage.faq4a') }}</p>
            </div>

              <div class="faq-item">
              <h3 class="faq-q">{{ t('ClassesPage.faq5q') }}</h3>
              <p class="faq-a">{{ t('ClassesPage.faq5a') }}</p>
            </div>
            </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import classPagesData from '../data/classes.data'
import type { ClassPage } from '../types/classPage'

const router = useRouter()
const { t } = useI18n()
const classPages = classPagesData as ClassPage[]
</script>

<style scoped>
.classes-view {
  padding-bottom: 4rem;
}

.classes-section {
  padding: 2rem 0 3rem;
}

.classes-extra {
  padding: 0 0 3.5rem;
}

@media (max-width: 768px) {
  .classes-section {
    padding: 1rem 0 1rem;
  }
}

.list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

.extra-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.25rem 1.35rem;
}

.extra-card + .extra-card {
  margin-top: 1.25rem;
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

.inline-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
}

.inline-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.faq {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.faq-item {
  padding: 0 0 0.9rem;
}

.faq-item:last-child {
  padding-bottom: 0;
}

.faq-q {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.35rem;
}

.faq-a {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.6;
  font-size: 0.9375rem;
}

.classes-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.class-row {
  border-bottom: 1px solid var(--color-border);
}

.class-row:last-child {
  border-bottom: none;
}

.row-link {
  display: grid;
  grid-template-columns: 2.5rem 80px 1fr 2rem;
  grid-template-rows: auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  transition: background var(--transition-base);
}

.row-link:hover {
  background: var(--color-bg-elevated);
}

.row-link:hover .row-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.row-index {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  opacity: 0.7;
}

.row-thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
}

.row-body {
  min-width: 0;
}

.row-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.row-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.row-meta {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  opacity: 0.8;
}

.row-arrow {
  font-size: 1.25rem;
  color: var(--color-primary);
  opacity: 0.6;
  transition: opacity var(--transition-base), transform var(--transition-base);
}

@media (max-width: 768px) {
  .row-link {
    grid-template-columns: 60px 1fr 2rem;
    gap: 1rem;
  }

  .row-index {
    display: none;
  }

  .row-thumb {
    width: 60px;
    height: 60px;
  }
}
</style>
