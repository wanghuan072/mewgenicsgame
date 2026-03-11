<template>
  <main class="legal-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('PrivacyPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('PrivacyPage.title') }}</h1>
        <p class="page-subtitle">{{ t('PrivacyPage.subtitle') }}</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="legal-article">
          <p class="legal-meta">{{ t('PrivacyPage.lastUpdated') }}</p>

          <h2>{{ t('PrivacyPage.section1Title') }}</h2>
          <p>
            {{ t('PrivacyPage.section1Body') }}
          </p>

          <h2>{{ t('PrivacyPage.section2Title') }}</h2>
          <p>{{ t('PrivacyPage.section2Intro') }}</p>
          <p>{{ t('PrivacyPage.section2ListIntro') }}</p>
          <ul>
            <li>{{ t('PrivacyPage.section2Item1') }}</li>
            <li>{{ t('PrivacyPage.section2Item2') }}</li>
          </ul>
          <p>{{ t('PrivacyPage.section2Outro') }}</p>

          <h2>{{ t('PrivacyPage.section3Title') }}</h2>
          <p>{{ t('PrivacyPage.section3Body') }}</p>

          <h2>{{ t('PrivacyPage.section4Title') }}</h2>
          <p>{{ t('PrivacyPage.section4Body') }}</p>

          <h2>{{ t('PrivacyPage.section5Title') }}</h2>
          <p>{{ t('PrivacyPage.section5Body') }}</p>

          <h2>{{ t('PrivacyPage.section6Title') }}</h2>
          <p>{{ t('PrivacyPage.section6Body') }}</p>

          <h2>{{ t('PrivacyPage.section7Title') }}</h2>
          <p v-html="t('PrivacyPage.section7Body')" />
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<style scoped>
.legal-section {
  padding: 2rem 0 3rem;
}

@media (max-width: 768px) {
  .legal-section {
    padding: 1rem 0 1rem;
  }
}

.legal-article {
  background: var(--color-bg-card);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  padding: 1.75rem 1.9rem;
}

.legal-meta {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.legal-article h2 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.legal-article p {
  color: var(--color-text);
  line-height: 1.7;
}

.legal-article ul {
  margin: 0.25rem 0 0.75rem;
  padding-left: 1.2rem;
  color: var(--color-text);
}

.legal-article li {
  margin-bottom: 0.25rem;
  font-size: 0.9375rem;
}

.legal-article a {
  color: var(--color-cta);
}

.legal-article a:hover {
  color: var(--color-cta-hover);
}

@media (max-width: 768px) {
  .legal-article {
    padding: 1.4rem 1.35rem;
  }
}
</style>

