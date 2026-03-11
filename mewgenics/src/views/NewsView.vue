<template>
  <main class="news-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('NewsPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('NewsPage.title') }}</h1>
        <p class="page-subtitle">{{ t('NewsPage.subtitle') }}</p>
      </div>
    </section>

    <section class="news-section">
      <div class="container">
        <h2 class="list-heading">{{ t('NewsPage.listHeading') }}</h2>
        <div class="news-timeline">
          <article
            v-for="item in news"
            :key="item.slug"
            class="timeline-item"
          >
            <a
              class="timeline-link"
              :href="`/news/${item.slug}`"
              @click.prevent="router.push(`/news/${item.slug}`)"
            >
              <time class="timeline-date" :datetime="item.publishDate">
                {{ item.publishDate }}
              </time>
              <div class="timeline-dot" aria-hidden="true" />
              <div class="timeline-content">
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-desc">{{ item.description }}</p>
                <span class="timeline-cta">{{ t('NewsPage.cta') }}</span>
              </div>
              <img
                class="timeline-thumb"
                :src="item.imageUrl"
                :alt="item.imageAlt"
                loading="lazy"
              />
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="news-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('NewsPage.aboutTitle') }}</h2>
          <p class="extra-text">
            {{ t('NewsPage.aboutText') }}
          </p>
          <ul class="extra-list">
            <li>{{ t('NewsPage.list1') }}</li>
            <li v-html="t('NewsPage.list2')"></li>
            <li>{{ t('NewsPage.list3') }}</li>
          </ul>
          <p class="extra-text extra-text--muted">
            {{ t('NewsPage.note') }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import newsData from '../data/news.data'
import type { NewsPage } from '../types/newsPage'

const router = useRouter()
const { t } = useI18n()
const news = newsData as NewsPage[]
</script>

<style scoped>
.news-view {
  padding-bottom: 4rem;
}

.news-section {
  padding: 2rem 0 3rem;
}

@media (max-width: 768px) {
  .news-section {
    padding: 1rem 0 1rem;
  }
}

.list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

.news-extra {
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

.news-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  position: relative;
}

.timeline-link {
  display: grid;
  grid-template-columns: 7rem 1.5rem 1fr 140px;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px dashed var(--color-border);
  text-decoration: none;
  color: inherit;
  transition: background var(--transition-base);
}

.timeline-item:last-child .timeline-link {
  border-bottom: none;
}

.timeline-link:hover {
  background: var(--color-bg-elevated);
}

.timeline-date {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary);
  opacity: 0.8;
  flex-shrink: 0;
}

.timeline-link:hover .timeline-dot {
  opacity: 1;
  box-shadow: 0 0 12px var(--color-primary);
}

.timeline-content {
  min-width: 0;
}

.timeline-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  margin-bottom: 0.35rem;
}

.timeline-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.timeline-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}

.timeline-thumb {
  width: 140px;
  height: 78px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
}

@media (max-width: 1024px) {
  .timeline-link {
    grid-template-columns: 6rem 1rem 1fr;
  }

  .timeline-thumb {
    display: none;
  }
}

@media (max-width: 768px) {
  .timeline-link {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1.25rem 0;
  }

  .timeline-date {
    order: 1;
  }

  .timeline-dot {
    display: none;
  }

  .timeline-content {
    order: 2;
  }
}
</style>
