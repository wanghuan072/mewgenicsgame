<template>
  <main class="wiki-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('WikiPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('WikiPage.title') }}</h1>
        <p class="page-subtitle">{{ t('WikiPage.subtitle') }}</p>
      </div>
    </section>

    <section class="wiki-section">
      <div class="container">
        <h2 class="wiki-list-heading">{{ t('WikiPage.sectionsTitle') }}</h2>
        <ul class="wiki-list" role="list">
          <li v-for="section in wikiSections" :key="section.slug">
            <a
              class="wiki-card"
              :href="`/wiki/${section.slug}`"
              @click.prevent="router.push(`/wiki/${section.slug}`)"
            >
              <span class="wiki-card-icon-wrap" aria-hidden="true">
                <!-- Boss: skull -->
                <svg v-if="section.icon === 'boss'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="10" r="6" />
                  <path d="M6 22c0-4 2.5-6 6-6s6 2 6 6" />
                  <circle cx="9" cy="9" r="1" />
                  <circle cx="15" cy="9" r="1" />
                  <path d="M9 13h6" />
                </svg>
                <!-- Mini-bosses: crossed blades -->
                <svg v-else-if="section.icon === 'miniboss'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 4l14 16M19 4L5 20" />
                  <path d="M7 4h3l2 3M14 17h3l-2-3" />
                </svg>
                <!-- Enemies: target -->
                <svg v-else-if="section.icon === 'enemies'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
                <!-- Events: calendar -->
                <svg v-else-if="section.icon === 'events'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <!-- NPCs: person -->
                <svg v-else-if="section.icon === 'npcs'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                </svg>
                <!-- Items: backpack -->
                <svg v-else-if="section.icon === 'items'" class="wiki-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              <div class="wiki-card-body">
                <h3 class="wiki-card-title">{{ section.title }}</h3>
                <p class="wiki-card-desc">{{ section.description }}</p>
                <span class="wiki-card-cta">{{ t('WikiPage.viewList') }} <span class="arrow">→</span></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="wiki-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('WikiPage.aboutTitle') }}</h2>
          <p class="extra-text">{{ t('WikiPage.aboutText') }}</p>
          <ul class="extra-list">
            <li v-html="t('WikiPage.buildFirst')"></li>
            <li v-html="t('WikiPage.needTips')"></li>
            <li v-html="t('WikiPage.planningBreeding')"></li>
            <li v-html="t('WikiPage.qualityOfLife')"></li>
          </ul>

          <h2 class="extra-faq-title">{{ t('WikiPage.faqTitle') }}</h2>
          <div class="extra-faq">
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('WikiPage.faq1q') }}</p>
              <p class="extra-faq-a">{{ t('WikiPage.faq1a') }}</p>
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('WikiPage.faq2q') }}</p>
              <p class="extra-faq-a" v-html="t('WikiPage.faq2a')" />
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('WikiPage.faq3q') }}</p>
              <p class="extra-faq-a">{{ t('WikiPage.faq3a') }}</p>
            </div>
          </div>

          <p class="extra-text extra-text--muted">
            {{ t('WikiPage.note') }}
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

const router = useRouter()
const { t } = useI18n()

const wikiSections = computed(() => [
  { slug: 'boss', title: t('WikiPage.sectionBoss'), description: t('WikiPage.sectionBossDesc'), icon: 'boss' },
  { slug: 'mini-bosses', title: t('WikiPage.sectionMiniBoss'), description: t('WikiPage.sectionMiniBossDesc'), icon: 'miniboss' },
  { slug: 'enemies', title: t('WikiPage.sectionEnemies'), description: t('WikiPage.sectionEnemiesDesc'), icon: 'enemies' },
  { slug: 'events', title: t('WikiPage.sectionEvents'), description: t('WikiPage.sectionEventsDesc'), icon: 'events' },
  { slug: 'npcs', title: t('WikiPage.sectionNpcs'), description: t('WikiPage.sectionNpcsDesc'), icon: 'npcs' },
  { slug: 'items', title: t('WikiPage.sectionItems'), description: t('WikiPage.sectionItemsDesc'), icon: 'items' },
])
</script>

<style scoped>
.wiki-view {
  padding-bottom: 4rem;
}

.wiki-section {
  padding: 2rem 0 3rem;
}

.wiki-extra {
  padding: 0 0 3.5rem;
}

@media (max-width: 768px) {
  .wiki-section {
    padding: 1rem 0 1rem;
  }
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

.wiki-list-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin: 0 0 1rem;
}

.wiki-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.wiki-list > li {
  display: flex;
  min-height: 0;
}

.wiki-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
}

.wiki-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.wiki-card-icon-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(232, 184, 74, 0.12);
  border-radius: 10px;
  color: var(--color-primary);
}

.wiki-card-icon {
  width: 26px;
  height: 26px;
}

.wiki-card-body {
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.wiki-card-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  line-height: 1.2;
  margin: 0 0 0.35rem;
  min-height: calc(2 * 1.2 * 1.15rem);
  max-height: calc(2 * 1.2 * 1.15rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.wiki-card-desc {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  line-height: 1.4;
  min-height: calc(2 * 1.4 * 0.9375rem);
  max-height: calc(2 * 1.4 * 0.9375rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.wiki-card-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: auto;
  flex-shrink: 0;
}

.wiki-card-cta .arrow {
  margin-left: 0.15em;
}

@media (max-width: 1024px) {
  .wiki-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .wiki-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .wiki-card {
    padding: 1.25rem;
  }
}
</style>
