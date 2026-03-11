<template>
  <main class="legal-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('TermsPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('TermsPage.title') }}</h1>
        <p class="page-subtitle">{{ t('TermsPage.subtitle') }}</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="legal-article">
          <p class="legal-meta">{{ t('TermsPage.lastUpdated') }}</p>

          <h2>{{ t('TermsPage.section1Title') }}</h2>
          <p>{{ t('TermsPage.section1Body') }}</p>

          <h2>{{ t('TermsPage.section2Title') }}</h2>
          <p>{{ t('TermsPage.section2Body') }}</p>

          <h2>{{ t('TermsPage.section3Title') }}</h2>
          <p>{{ t('TermsPage.section3Intro') }}</p>
          <ul>
            <li>{{ t('TermsPage.section3Item1') }}</li>
            <li>{{ t('TermsPage.section3Item2') }}</li>
            <li>{{ t('TermsPage.section3Item3') }}</li>
          </ul>

          <h2>{{ t('TermsPage.section4Title') }}</h2>
          <p>{{ t('TermsPage.section4Body') }}</p>

          <h2>{{ t('TermsPage.section5Title') }}</h2>
          <p>{{ t('TermsPage.section5Body') }}</p>

          <h2>{{ t('TermsPage.section6Title') }}</h2>
          <p>{{ t('TermsPage.section6Body') }}</p>

          <h2>{{ t('TermsPage.section7Title') }}</h2>
          <p>{{ t('TermsPage.section7Body') }}</p>

          <h2>{{ t('TermsPage.section8Title') }}</h2>
          <p v-html="t('TermsPage.section8Body')" />
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

