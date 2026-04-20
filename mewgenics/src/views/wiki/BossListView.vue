<template>
  <main class="wiki-list-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('BossListPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('BossListPage.title') }}</h1>
        <p class="page-subtitle" v-html="t('BossListPage.subtitle')" />
      </div>
    </section>

    <section class="list-section">
      <div class="container">
        <h2 class="list-heading">{{ t('BossListPage.listHeading') }}</h2>
        <ul class="boss-grid" role="list">
          <li v-for="entry in entries" :key="entry.id" class="boss-card-wrap">
            <a
              v-if="entry.isPage"
              class="boss-card"
              :href="`/wiki/boss/${entry.slug}`"
              @click.prevent="router.push(`/wiki/boss/${entry.slug}`)"
            >
              <div class="boss-card-img-wrap">
                <img v-if="entry.imageUrl" class="boss-card-img" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                <div v-else class="boss-card-img boss-card-img--placeholder" aria-hidden="true" />
              </div>
              <div class="boss-card-body">
                <h3 class="boss-card-name">{{ entry.name }}</h3>
                <p class="boss-card-desc">{{ entry.description }}</p>
                <span class="boss-card-cta">{{ t('BossListPage.viewDetails') }}</span>
              </div>
            </a>
            <div v-else class="boss-card boss-card--plain">
              <div class="boss-card-img-wrap">
                <img v-if="entry.imageUrl" class="boss-card-img" :src="entry.imageUrl" :alt="entry.imageAlt" loading="lazy" />
                <div v-else class="boss-card-img boss-card-img--placeholder" aria-hidden="true" />
              </div>
              <div class="boss-card-body">
                <h3 class="boss-card-name">{{ entry.name }}</h3>
                <p class="boss-card-desc">{{ entry.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="wiki-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('BossListPage.aboutTitle') }}</h2>
          <p class="extra-text">
            {{ t('BossListPage.aboutText') }}
          </p>
          <ul class="extra-list">
            <li v-html="t('BossListPage.pickRoles')"></li>
            <li v-html="t('BossListPage.planGear')"></li>
            <li v-html="t('BossListPage.needTips')"></li>
          </ul>

          <h2 class="extra-faq-title">{{ t('BossListPage.faqTitle') }}</h2>
          <div class="extra-faq">
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('BossListPage.faq1q') }}</p>
              <p class="extra-faq-a">{{ t('BossListPage.faq1a') }}</p>
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('BossListPage.faq2q') }}</p>
              <p class="extra-faq-a" v-html="t('BossListPage.faq2a')" />
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('BossListPage.faq3q') }}</p>
              <p class="extra-faq-a" v-html="t('BossListPage.faq3a')" />
            </div>
          </div>

          <p class="extra-text extra-text--muted">
            {{ t('BossListPage.note') }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import bossData from '../../data/wiki/boss.data'
import type { BossEntry } from '../../types/wiki'

const router = useRouter()
const { t } = useI18n()
const entries = computed(() => (bossData as unknown as BossEntry[]))
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

.boss-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.boss-card-wrap {
  min-width: 0;
}

.boss-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 17.5rem;
  text-decoration: none;
  color: inherit;
  background: var(--color-bg-card);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
}

.boss-card:hover {
  border-color: rgba(232, 184, 74, 0.35);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transform: translateY(-2px);
}

.boss-card--plain {
  cursor: default;
}

.boss-card--plain:hover {
  border-color: var(--color-border);
  box-shadow: none;
  transform: none;
}

.boss-card-img-wrap {
  aspect-ratio: 1/1;
  background: var(--color-bg-elevated);
  overflow: hidden;
}

.boss-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.boss-card-img--placeholder {
  background: linear-gradient(135deg, rgba(61, 56, 71, 0.6), rgba(45, 42, 55, 0.8));
}

.boss-card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 0;
}

.boss-card-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
}

.boss-card-desc {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
  min-height: calc(2 * 1.4 * 0.8125rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.boss-card-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: 0.25rem;
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

@media (max-width: 1024px) {
  .boss-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .boss-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
