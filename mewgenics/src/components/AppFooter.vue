<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <section class="footer-brand">
          <div class="footer-brand-title">
            <img src="/images/logo.webp" alt="Mewgenics Game Logo" class="footer-brand-icon" />
            <span class="footer-brand-name">{{ t('Footer.brandName') }}</span>
          </div>
          <p class="footer-brand-desc" v-html="t('Footer.brandDesc')" />
          <div class="footer-brand-links">
            <a href="https://store.steampowered.com/app/686060/Mewgenics/" target="_blank" rel="noopener noreferrer">{{ t('Footer.linkSteam') }}</a>
            <a href="https://www.mewgenics.com/" target="_blank" rel="noopener noreferrer">{{ t('Footer.linkOfficial') }}</a>
          </div>
        </section>

        <nav class="footer-col" aria-label="Navigate">
          <h2 class="footer-col-title">{{ t('Footer.navigateTitle') }}</h2>
          <ul class="footer-list">
            <li><a href="/" @click.prevent="goTo('/')">{{ t('Footer.navHome') }}</a></li>
            <li><a href="/wiki" @click.prevent="goTo('/wiki')">{{ t('Footer.navWiki') }}</a></li>
            <li><a href="/classes" @click.prevent="goTo('/classes')">{{ t('Footer.navClasses') }}</a></li>
            <li><a href="/breeding-tool" @click.prevent="goTo('/breeding-tool')">{{ t('Footer.navBreedingTool') }}</a></li>
            <li><a href="/guides" @click.prevent="goTo('/guides')">{{ t('Footer.navGuides') }}</a></li>
            <li><a href="/mods" @click.prevent="goTo('/mods')">{{ t('Footer.navMods') }}</a></li>
            <li><a href="/news" @click.prevent="goTo('/news')">{{ t('Footer.navNews') }}</a></li>
          </ul>
        </nav>

        <section class="footer-col">
          <h2 class="footer-col-title">{{ t('Footer.legalTitle') }}</h2>
          <ul class="footer-list">
            <li><a href="/privacy" @click.prevent="goTo('/privacy')">{{ t('Footer.legalPrivacy') }}</a></li>
            <li><a href="/terms" @click.prevent="goTo('/terms')">{{ t('Footer.legalTerms') }}</a></li>
            <li><a href="/copyright" @click.prevent="goTo('/copyright')">{{ t('Footer.legalCopyright') }}</a></li>
            <li><a href="/about" @click.prevent="goTo('/about')">{{ t('Footer.legalAbout') }}</a></li>
            <li><a href="/contact" @click.prevent="goTo('/contact')">{{ t('Footer.legalContact') }}</a></li>
          </ul>
        </section>
      </div>

      <div class="footer-bottom">
        <p class="footer-bottom-text">
          {{ t('Footer.bottomLine', { date: updatedDate }) }}
        </p>
        <p class="footer-bottom-text footer-bottom-muted">
          {{ t('Footer.disclaimer') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
const updatedDate = computed(() => new Date().toISOString().slice(0, 10))

function goTo(path: string) {
  router.push(path)
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(180deg, rgba(26, 24, 32, 0.85), rgba(15, 14, 18, 1));
  border-top: 1px solid rgba(61, 56, 71, 0.8);
  padding: 3rem 0 1.5rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 2.5rem;
  align-items: start;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(61, 56, 71, 0.65);
}

.footer-brand-title {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-brand-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(232, 184, 74, 0.35);
  background: linear-gradient(180deg, rgba(232, 184, 74, 0.18), rgba(232, 184, 74, 0.06));
  box-shadow: 0 0 22px rgba(232, 184, 74, 0.18);
}

.footer-brand-mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  border: 1px solid rgba(232, 184, 74, 0.35);
  background: linear-gradient(180deg, rgba(232, 184, 74, 0.18), rgba(232, 184, 74, 0.06));
  box-shadow: 0 0 22px rgba(232, 184, 74, 0.18);
  font-family: var(--font-heading);
  font-size: 1rem;
  letter-spacing: 0.06em;
  color: var(--color-text);
}

.footer-brand-name {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--color-text);
  text-shadow: 0 0 22px var(--color-glow-soft);
}

.footer-brand-desc {
  margin: 0 0 1.25rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 60ch;
}

.footer-brand-desc strong {
  color: var(--color-text);
  font-weight: 600;
}

.footer-brand-links {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.footer-col-title {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-text);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-list a,
.footer-brand-links a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-base), text-shadow var(--transition-base);
}

.footer-list a:hover,
.footer-brand-links a:hover {
  color: var(--color-primary-hover);
  text-shadow: 0 0 16px rgba(232, 184, 74, 0.25);
}

.footer-bottom {
  padding-top: 1.25rem;
  text-align: center;
}

.footer-bottom-text {
  margin: 0.35rem 0;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.footer-bottom-muted {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
