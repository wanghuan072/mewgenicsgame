<template>
  <main class="wiki-list-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('ItemsListPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('ItemsListPage.title') }}</h1>
        <p class="page-subtitle" v-html="t('ItemsListPage.subtitle')" />
      </div>
    </section>

    <section class="list-section">
      <div class="container">
        <h2 class="list-heading">{{ t('ItemsListPage.listHeading') }}</h2>
        <ul class="entry-list" role="list">
          <li v-for="entry in entries" :key="entry.id" class="entry-row">
            <a
              v-if="entry.isPage"
              class="entry-link"
              :href="`/wiki/items/${entry.slug}`"
              @click.prevent="router.push(`/wiki/items/${entry.slug}`)"
            >
              <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
              <div class="entry-body">
                <h3 class="entry-name">{{ entry.name }}</h3>
                <p v-if="entry.description" class="entry-desc">{{ entry.description }}</p>
                <p v-if="entry.intro" class="entry-intro">{{ entry.intro }}</p>
                <span class="entry-cta">{{ t('ItemsListPage.viewDetails') }}</span>
              </div>
            </a>
            <div v-else class="entry-link entry-link--plain">
              <img v-if="entry.imageUrl" class="entry-thumb" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
              <div class="entry-body">
                <h3 class="entry-name">{{ entry.name }}</h3>
                <p v-if="entry.description" class="entry-desc">{{ entry.description }}</p>
                <p v-if="entry.intro" class="entry-intro">{{ entry.intro }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="wiki-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('ItemsListPage.aboutTitle') }}</h2>
          <p class="extra-text">
            {{ t('ItemsListPage.aboutText') }}
          </p>
          <ul class="extra-list">
            <li v-html="t('ItemsListPage.list1')"></li>
            <li v-html="t('ItemsListPage.list2')"></li>
            <li v-html="t('ItemsListPage.list3')"></li>
          </ul>

          <h2 class="extra-faq-title">{{ t('ItemsListPage.faqTitle') }}</h2>
          <div class="extra-faq">
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('ItemsListPage.faq1q') }}</p>
              <p class="extra-faq-a">{{ t('ItemsListPage.faq1a') }}</p>
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('ItemsListPage.faq2q') }}</p>
              <p class="extra-faq-a">{{ t('ItemsListPage.faq2a') }}</p>
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('ItemsListPage.faq3q') }}</p>
              <p class="extra-faq-a" v-html="t('ItemsListPage.faq3a')" />
            </div>
          </div>

          <p class="extra-text extra-text--muted">{{ t('ItemsListPage.note') }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import itemsData from '../../data/wiki/items.data'
import type { ItemEntry } from '../../types/wiki'

const router = useRouter()
const { t } = useI18n()
const entries = computed(() => itemsData as unknown as ItemEntry[])
</script>

<style scoped>
.wiki-list-view {
  padding-bottom: 4rem;
}

.list-section {
  padding: 1.5rem 0 3rem;
}

@media (max-width: 768px) {
  .list-section {
    padding: 1rem 0 1rem;
  }
}

.list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

.entry-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.entry-row {
  border-bottom: 1px solid var(--color-border);
}

.entry-row:last-child {
  border-bottom: none;
}

.entry-link {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  transition: background-color var(--transition-base);
}

.entry-link:hover {
  background: rgba(255, 255, 255, 0.03);
}

.entry-link--plain {
  cursor: default;
}

.entry-link--plain:hover {
  background: transparent;
}

.entry-thumb {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
}

.entry-body {
  min-width: 0;
}

.entry-name {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.entry-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 0.15rem;
}

.entry-intro {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 0.25rem;
}

.entry-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}

.wiki-extra {
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

.inline-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
}

.inline-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.extra-faq-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.05rem;
  margin: 0.25rem 0 0.75rem;
}

.extra-faq {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.extra-faq-item {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: rgba(15, 14, 18, 0.32);
  padding: 0.9rem 1rem;
}

.extra-faq-q {
  margin: 0 0 0.35rem;
  color: var(--color-text);
  font-weight: 700;
}

.extra-faq-a {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .entry-link {
    grid-template-columns: 1fr;
  }

  .entry-thumb {
    width: 100%;
    height: 140px;
  }
}
</style>
