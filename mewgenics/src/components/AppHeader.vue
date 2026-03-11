<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-content">
        <a class="brand" href="/" @click.prevent="goTo('/')">
          <img src="/images/logo.webp" alt="Mewgenics Game Logo" class="brand-icon" />
          <span class="brand-title">{{ t('Header.brandTitle') }}</span>
        </a>

        <button
          class="menu-btn"
          type="button"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-controls="primary-nav"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">{{ t('Header.toggleNav') }}</span>
          <span class="menu-icon" aria-hidden="true"></span>
        </button>

        <nav id="primary-nav" class="nav" :class="{ 'nav--open': isMenuOpen }">
          <ul class="nav-list">
            <li v-for="item in navItems" :key="item.href" class="nav-item">
              <a
                class="nav-link"
                :href="item.href"
                :class="{ 'nav-link--active': isActive(item.href) }"
                @click.prevent="goTo(item.href)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const isMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('Header.navHome'), href: '/' },
  { label: t('Header.navBreedingTool'), href: '/breeding-tool' },
  { label: t('Header.navWiki'), href: '/wiki' },
  { label: t('Header.navClasses'), href: '/classes' },
  { label: t('Header.navGuides'), href: '/guides' },
  { label: t('Header.navMods'), href: '/mods' },
  { label: t('Header.navNews'), href: '/news' },
])

function isActive(href: string) {
  if (href === '/') return route.path === '/'
  return route.path === href || route.path.startsWith(`${href}/`)
}

function goTo(href: string) {
  isMenuOpen.value = false
  router.push(href)
}

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(15, 14, 18, 0.72);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(61, 56, 71, 0.7);
}

.app-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--color-text);
}

.brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(232, 184, 74, 0.35);
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 248, 231, 0.18), transparent 55%),
    linear-gradient(180deg, rgba(232, 184, 74, 0.18), rgba(232, 184, 74, 0.06));
  box-shadow: 0 0 22px rgba(232, 184, 74, 0.18);
}

.brand-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.15rem;
  text-shadow: 0 0 22px var(--color-glow-soft);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem;
  border: 1px solid rgba(61, 56, 71, 0.7);
  border-radius: 999px;
  background: rgba(26, 24, 32, 0.55);
}

.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: background var(--transition-base), color var(--transition-base), box-shadow var(--transition-base);
}

.nav-link:hover {
  color: var(--color-text);
  background: rgba(232, 184, 74, 0.08);
}

.nav-link--active {
  color: #0f0e12;
  background: rgba(232, 184, 74, 0.92);
  box-shadow: 0 0 20px rgba(232, 184, 74, 0.22);
}


.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(61, 56, 71, 0.8);
  background: rgba(26, 24, 32, 0.55);
  color: var(--color-text);
  cursor: pointer;
  transition: border-color var(--transition-base), background var(--transition-base);
}

.menu-btn:hover {
  border-color: rgba(232, 184, 74, 0.55);
  background: rgba(232, 184, 74, 0.06);
}

.menu-btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.menu-icon {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto;
  background: var(--color-text);
  border-radius: 999px;
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 999px;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  top: 6px;
}

@media (max-width: 1024px) {
  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav {
    position: absolute;
    top: calc(100% + 10px);
    right: 1.5rem;
    left: 1.5rem;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 0.9rem;
    border-radius: 16px;
    border: 1px solid rgba(61, 56, 71, 0.8);
    background: rgba(15, 14, 18, 0.92);
    backdrop-filter: blur(14px);
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.55);
  }

  .nav--open {
    display: flex;
  }

  .nav-list {
    flex-direction: column;
    align-items: stretch;
    border-radius: 14px;
  }

  .nav-link {
    justify-content: flex-start;
    border-radius: 12px;
  }
}
</style>
