<template>
  <main class="wiki-list-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <a class="breadcrumb-link" href="/wiki">{{ t('WikiPage.breadcrumb') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('EnemiesListPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('EnemiesListPage.title') }}</h1>
        <p class="page-subtitle" v-html="t('EnemiesListPage.subtitle')" />
      </div>
    </section>

    <section class="list-section">
      <div class="container">
        <h2 class="list-heading">{{ t('EnemiesListPage.listHeading') }}</h2>

        <section
          v-for="group in data.groups"
          :key="group.id"
          class="enemy-group"
        >
          <h3 class="group-title">{{ groupHeading(group) }}</h3>

          <div
            v-for="chapter in group.chapters"
            :key="chapter.id"
            class="chapter-iteration"
          >
            <div v-if="chapter.title" class="chapter-block">
                <h4 class="chapter-title">{{ chapter.title }}</h4>

                <template v-if="chapter.areas?.length">
                  <div v-for="area in chapter.areas" :key="area.id" class="area-block">
                    <h5 class="area-title">{{ area.title }}</h5>
                    <ul class="card-grid" role="list">
                      <li v-for="entry in area.entries" :key="entry.id" class="enemy-card">
                        <div class="enemy-card-img-wrap">
                          <img
                            class="enemy-card-img"
                            :src="entry.imageUrl"
                            :alt="entry.imageAlt"
                            loading="lazy"
                          />
                        </div>
                        <div class="enemy-card-body">
                          <p class="enemy-card-name">{{ entry.name }}</p>
                          <p v-if="entry.tags?.length" class="enemy-card-tags">
                            <span v-for="tag in entry.tags" :key="tag" class="tag">{{ tag }}</span>
                          </p>
                          <p v-if="showEnemyType(group, entry)" class="enemy-card-type">{{ entry.enemyType }}</p>
                          <p v-if="entry.description" class="enemy-card-desc">{{ entry.description }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>

                <ul v-else-if="chapter.entries?.length" class="card-grid" role="list">
                  <li v-for="entry in chapter.entries" :key="entry.id" class="enemy-card">
                    <div class="enemy-card-img-wrap">
                      <img
                        class="enemy-card-img"
                        :src="entry.imageUrl"
                        :alt="entry.imageAlt"
                        loading="lazy"
                      />
                    </div>
                    <div class="enemy-card-body">
                      <p class="enemy-card-name">{{ entry.name }}</p>
                      <p v-if="entry.tags?.length" class="enemy-card-tags">
                        <span v-for="tag in entry.tags" :key="tag" class="tag">{{ tag }}</span>
                      </p>
                      <p v-if="showEnemyType(group, entry)" class="enemy-card-type">{{ entry.enemyType }}</p>
                      <p v-if="entry.description" class="enemy-card-desc">{{ entry.description }}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <template v-else>
                <template v-if="chapter.areas?.length">
                  <div v-for="area in chapter.areas" :key="area.id" class="area-block area-block--no-chapter">
                    <h5 v-if="area.title" class="area-title">{{ area.title }}</h5>
                    <ul class="card-grid" role="list">
                      <li v-for="entry in area.entries" :key="entry.id" class="enemy-card">
                        <div class="enemy-card-img-wrap">
                          <img
                            class="enemy-card-img"
                            :src="entry.imageUrl"
                            :alt="entry.imageAlt"
                            loading="lazy"
                          />
                        </div>
                        <div class="enemy-card-body">
                          <p class="enemy-card-name">{{ entry.name }}</p>
                          <p v-if="entry.tags?.length" class="enemy-card-tags">
                            <span v-for="tag in entry.tags" :key="tag" class="tag">{{ tag }}</span>
                          </p>
                          <p v-if="showEnemyType(group, entry)" class="enemy-card-type">{{ entry.enemyType }}</p>
                          <p v-if="entry.description" class="enemy-card-desc">{{ entry.description }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
                <ul v-else-if="chapter.entries?.length" class="card-grid card-grid--flush" role="list">
                  <li v-for="entry in chapter.entries" :key="entry.id" class="enemy-card">
                    <div class="enemy-card-img-wrap">
                      <img
                        class="enemy-card-img"
                        :src="entry.imageUrl"
                        :alt="entry.imageAlt"
                        loading="lazy"
                      />
                    </div>
                    <div class="enemy-card-body">
                      <p class="enemy-card-name">{{ entry.name }}</p>
                      <p v-if="entry.tags?.length" class="enemy-card-tags">
                        <span v-for="tag in entry.tags" :key="tag" class="tag">{{ tag }}</span>
                      </p>
                      <p v-if="showEnemyType(group, entry)" class="enemy-card-type">{{ entry.enemyType }}</p>
                      <p v-if="entry.description" class="enemy-card-desc">{{ entry.description }}</p>
                    </div>
                  </li>
                </ul>
              </template>
          </div>
        </section>
      </div>
    </section>

    <section class="wiki-extra">
      <div class="container">
        <article class="extra-card">
          <h2 class="extra-title">{{ t('EnemiesListPage.aboutTitle') }}</h2>
          <p class="extra-text">{{ t('EnemiesListPage.aboutText') }}</p>
          <ul class="extra-list">
            <li v-html="t('EnemiesListPage.list1')"></li>
            <li v-html="t('EnemiesListPage.list2')"></li>
            <li v-html="t('EnemiesListPage.list3')"></li>
          </ul>

          <h2 class="extra-faq-title">{{ t('EnemiesListPage.faqTitle') }}</h2>
          <div class="extra-faq">
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('EnemiesListPage.faq1q') }}</p>
              <p class="extra-faq-a">{{ t('EnemiesListPage.faq1a') }}</p>
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('EnemiesListPage.faq2q') }}</p>
              <p class="extra-faq-a extra-faq-a--rich" v-html="t('EnemiesListPage.faq2a')" />
            </div>
            <div class="extra-faq-item">
              <p class="extra-faq-q">{{ t('EnemiesListPage.faq3q') }}</p>
              <p class="extra-faq-a extra-faq-a--rich" v-html="t('EnemiesListPage.faq3a')" />
            </div>
          </div>

          <p class="extra-text extra-text--muted">{{ t('EnemiesListPage.note') }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import enemiesData from '../../data/wiki/enemies.data'
import type { EnemiesWikiData, EnemyWikiGroup, EnemyCard } from '../../types/wiki'

const { t } = useI18n()

const data = computed(() => enemiesData as unknown as EnemiesWikiData)

function groupHeading(group: EnemyWikiGroup) {
  return group.actLabel || group.title
}

/** Hide redundant type line where the section already implies the role. */
function showEnemyType(group: EnemyWikiGroup, entry: EnemyCard) {
  if (group.id === 'summons' || group.id === 'events') return false
  if (group.id === 'all' && entry.tags?.length) return false
  return Boolean(entry.enemyType)
}
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
  margin: 0 0 1.25rem;
}

.chapter-iteration {
  display: contents;
}

.enemy-group {
  margin-bottom: 2.25rem;
}

.enemy-group:last-child {
  margin-bottom: 0;
}

.group-title {
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  margin: 0 0 1rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

.chapter-block {
  margin-bottom: 1.5rem;
}

.chapter-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--color-text-muted);
}

.area-block {
  margin-bottom: 1.35rem;
}

.area-block--no-chapter {
  margin-top: 0.5rem;
}

.area-title {
  font-size: 0.9375rem;
  font-weight: 700;
  margin: 0 0 0.65rem;
  color: var(--color-primary);
}

.card-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.card-grid--flush {
  margin-top: 0.5rem;
}

.enemy-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  min-height: 0;
}

.enemy-card-img-wrap {
  aspect-ratio: 16 / 10;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid var(--color-border);
}

.enemy-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.enemy-card-body {
  padding: 0.65rem 0.75rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
  min-height: 0;
}

.enemy-card-name {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.25;
  text-align: center;
}

.enemy-card-tags {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: center;
}

.tag {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: rgba(232, 184, 74, 0.12);
  color: var(--color-primary);
  border: 1px solid rgba(232, 184, 74, 0.35);
}

.enemy-card-type {
  margin: 0;
  font-size: 0.75rem;
  text-align: center;
  color: var(--color-text-muted);
}

.enemy-card-desc {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: var(--color-text-muted);
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

.extra-faq-a--rich :deep(code) {
  font-size: 0.85em;
  padding: 0.1em 0.35em;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
