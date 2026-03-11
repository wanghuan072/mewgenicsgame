<template>
  <main class="breeding-tool-view">
    <section class="page-hreo">
      <div class="container">
        <p class="breadcrumb">
          <a class="breadcrumb-link" href="/">{{ t('Common.home') }}</a>
          <span class="sep">/</span>
          <span class="crumb-current">{{ t('BreedingToolPage.breadcrumb') }}</span>
        </p>
        <h1 class="page-title">{{ t('BreedingToolPage.title') }}</h1>
        <p class="page-subtitle">{{ t('BreedingToolPage.subtitle') }}</p>
      </div>
    </section>

    <section class="calculator-section">
      <div class="container">
        <div class="tool-grid">
          <div class="left-col">
            <section class="panel panel--parents">
              <header class="panel-header">
                <h2 class="panel-title">{{ t('BreedingToolPage.parentsTitle') }}</h2>
                <p class="panel-subtitle">{{ t('BreedingToolPage.parentsSubtitle') }}</p>
              </header>

              <div class="parents-grid">
                <div class="parent-panel">
                  <h3 class="parent-title">{{ t('BreedingToolPage.parent1') }}</h3>
                  <div class="field-grid">
                    <div class="field-group">
                      <label for="p1-trait">{{ t('BreedingToolPage.trait') }}</label>
                      <select id="p1-trait" v-model="parent1Trait">
                        <option value="">{{ t('BreedingToolPage.selectTrait') }}</option>
                        <option v-for="t in traitOptions" :key="t" :value="t">
                          {{ t }}
                        </option>
                      </select>
                      <p class="field-help">{{ t('BreedingToolPage.traitHelp1') }}</p>
                    </div>
                    <div class="field-group">
                      <label for="p1-class">{{ t('BreedingToolPage.class') }}</label>
                      <select id="p1-class" v-model="parent1Class">
                        <option value="">{{ t('BreedingToolPage.selectClass') }}</option>
                        <option v-for="c in classOptions" :key="c" :value="c">
                          {{ c }}
                        </option>
                      </select>
                      <p class="field-help">{{ t('BreedingToolPage.classHelp1') }}</p>
                    </div>
                  </div>
                </div>

                <div class="parent-panel">
                  <h3 class="parent-title">{{ t('BreedingToolPage.parent2') }}</h3>
                  <div class="field-grid">
                    <div class="field-group">
                      <label for="p2-trait">{{ t('BreedingToolPage.trait') }}</label>
                      <select id="p2-trait" v-model="parent2Trait">
                        <option value="">{{ t('BreedingToolPage.selectTrait') }}</option>
                        <option v-for="t in traitOptions" :key="t" :value="t">
                          {{ t }}
                        </option>
                      </select>
                      <p class="field-help">{{ t('BreedingToolPage.traitHelp2') }}</p>
                    </div>
                    <div class="field-group">
                      <label for="p2-class">{{ t('BreedingToolPage.class') }}</label>
                      <select id="p2-class" v-model="parent2Class">
                        <option value="">{{ t('BreedingToolPage.selectClass') }}</option>
                        <option v-for="c in classOptions" :key="c" :value="c">
                          {{ c }}
                        </option>
                      </select>
                      <p class="field-help">{{ t('BreedingToolPage.classHelp2') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="panel panel--house">
              <header class="panel-header">
                <h2 class="panel-title">{{ t('BreedingToolPage.houseStatsTitle') }}</h2>
                <p class="panel-subtitle">{{ t('BreedingToolPage.houseStatsSubtitle') }}</p>
              </header>

              <div class="slider-list slider-list--two">
                <div class="slider-row">
                  <div class="slider-top">
                    <label class="slider-label" for="comfort">{{ t('BreedingToolPage.comfort') }}</label>
                    <span class="slider-value">{{ comfort }}/5</span>
                  </div>
                  <input id="comfort" v-model.number="comfort" type="range" min="1" max="5" />
                  <p class="field-help">{{ t('BreedingToolPage.comfortHelp') }}</p>
                </div>

                <div class="slider-row">
                  <div class="slider-top">
                    <label class="slider-label" for="stimulation">{{ t('BreedingToolPage.stimulation') }}</label>
                    <span class="slider-value">{{ stimulation }}/5</span>
                  </div>
                  <input id="stimulation" v-model.number="stimulation" type="range" min="1" max="5" />
                  <p class="field-help">{{ t('BreedingToolPage.stimulationHelp') }}</p>
                </div>

                <div class="slider-row">
                  <div class="slider-top">
                    <label class="slider-label" for="mutation">{{ t('BreedingToolPage.mutation') }}</label>
                    <span class="slider-value">{{ mutation }}/5</span>
                  </div>
                  <input id="mutation" v-model.number="mutation" type="range" min="1" max="5" />
                  <p class="field-help">{{ t('BreedingToolPage.mutationHelp') }}</p>
                </div>

                <div class="slider-row">
                  <div class="slider-top">
                    <label class="slider-label" for="appeal">{{ t('BreedingToolPage.appeal') }}</label>
                    <span class="slider-value">{{ appeal }}/5</span>
                  </div>
                  <input id="appeal" v-model.number="appeal" type="range" min="1" max="5" />
                  <p class="field-help">{{ t('BreedingToolPage.appealHelp') }}</p>
                </div>
              </div>
            </section>
          </div>

          <aside class="right-col">
            <section class="panel panel--actions">
              <header class="panel-header">
                <h2 class="panel-title">{{ t('BreedingToolPage.riskOutputTitle') }}</h2>
                <p class="panel-subtitle">{{ t('BreedingToolPage.riskOutputSubtitle') }}</p>
              </header>

              <div class="field-group">
                <label for="gen-gap">{{ t('BreedingToolPage.generationsApart') }}</label>
                <input id="gen-gap" v-model.number="generationGap" type="number" min="1" max="20" />
                <p class="field-help">{{ t('BreedingToolPage.genGapHelp') }}</p>
              </div>

              <button type="button" class="btn btn--primary" @click="onCalculate">{{ t('BreedingToolPage.calculate') }}</button>

              <div v-if="!hasCalculated" class="note-card">
                <p class="note-title">{{ t('BreedingToolPage.tipTitle') }}</p>
                <p class="note-text" v-html="t('BreedingToolPage.tipText')" />
              </div>
            </section>

            <section class="panel panel--results">
              <header class="panel-header">
                <h2 class="panel-title">{{ t('BreedingToolPage.resultTitle') }}</h2>
                <p class="panel-subtitle">
                  <span v-if="hasCalculated">{{ t('BreedingToolPage.resultSubtitleCalculated') }}</span>
                  <span v-else v-html="t('BreedingToolPage.resultSubtitlePlaceholder')" />
                </p>
              </header>

              <div class="results-grid">
                <div class="result-item">
                  <p class="result-label">{{ t('BreedingToolPage.traitInheritance') }}</p>
                  <p class="result-value">{{ hasCalculated ? `${inheritanceChance}%` : '?' }}</p>
                  <p class="result-hint">{{ t('BreedingToolPage.towardStronger') }}</p>
                </div>
                <div class="result-item">
                  <p class="result-label">{{ t('BreedingToolPage.randomMutation') }}</p>
                  <p class="result-value">{{ hasCalculated ? `${mutationChance}%` : '?' }}</p>
                  <p class="result-hint">{{ t('BreedingToolPage.influencedBy') }}</p>
                </div>
                <div class="result-item">
                  <p class="result-label">{{ t('BreedingToolPage.inbreedingRisk') }}</p>
                  <p class="result-value">{{ hasCalculated ? inbreedingRisk : '?' }}</p>
                  <p class="result-hint">{{ t('BreedingToolPage.basedOnGap') }}</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>

    <section class="help-section">
      <div class="container">
        <div class="help-grid">
          <section class="help-card">
            <h2 class="help-title">{{ t('BreedingToolPage.howToUseTitle') }}</h2>
            <p class="help-lead" v-html="t('BreedingToolPage.howToUseLead')" />

            <div class="help-steps">
              <div class="help-step">
                <h3 class="help-step-title">{{ t('BreedingToolPage.step1Title') }}</h3>
                <p class="help-text" v-html="t('BreedingToolPage.step1Text')" />
              </div>
              <div class="help-step">
                <h3 class="help-step-title">{{ t('BreedingToolPage.step2Title') }}</h3>
                <p class="help-text" v-html="t('BreedingToolPage.step2Text')" />
              </div>
              <div class="help-step">
                <h3 class="help-step-title">{{ t('BreedingToolPage.step3Title') }}</h3>
                <p class="help-text">{{ t('BreedingToolPage.step3Text') }}</p>
              </div>
              <div class="help-step">
                <h3 class="help-step-title">{{ t('BreedingToolPage.step4Title') }}</h3>
                <ul class="help-list">
                  <li>{{ t('BreedingToolPage.step4Item1') }}</li>
                  <li>{{ t('BreedingToolPage.step4Item2') }}</li>
                  <li>{{ t('BreedingToolPage.step4Item3') }}</li>
                </ul>
              </div>
            </div>

            <p class="help-note" v-html="t('BreedingToolPage.helpNote')" />
          </section>

          <section class="help-card">
            <h2 class="help-title">{{ t('BreedingToolPage.faqTitle') }}</h2>

            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq1q') }}</h3>
                <p class="faq-a" v-html="t('BreedingToolPage.faq1a')" />
              </div>
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq2q') }}</h3>
                <p class="faq-a">{{ t('BreedingToolPage.faq2a') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq3q') }}</h3>
                <p class="faq-a">{{ t('BreedingToolPage.faq3a') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq4q') }}</h3>
                <p class="faq-a" v-html="t('BreedingToolPage.faq4a')" />
              </div>
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq5q') }}</h3>
                <p class="faq-a">{{ t('BreedingToolPage.faq5a') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-q">{{ t('BreedingToolPage.faq6q') }}</h3>
                <p class="faq-a" v-html="t('BreedingToolPage.faq6a')" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const traitOptions = [
  'Autism',
  'ADHD',
  'Dyslexia',
  'Primordial Dwarfism',
  'Dwarfism',
  'Strong',
  'Weak',
  'Agile',
  'Clumsy',
  'Tough',
  'Frail',
  'Smart',
  'Dumb',
  'Quick',
  'Slow',
  'Lucky',
  'Unlucky',
  'Calm',
  'Aggressive',
  'Sickly',
  'Lazy',
  'Cowardly',
  'Charming',
  'Repulsive',
]

const classOptions = ['Fighter', 'Mage', 'Hunter', 'Tank', 'Necromancer', 'Support']

const parent1Trait = ref('')
const parent1Class = ref('')
const parent2Trait = ref('')
const parent2Class = ref('')

const comfort = ref(3)
const stimulation = ref(3)
const mutation = ref(1)
const appeal = ref(3)

const generationGap = ref(10)
const hasCalculated = ref(false)

const inheritanceChance = computed(() => {
  if (!hasCalculated.value) return null
  let base = 50
  if (parent1Trait.value && parent1Trait.value === parent2Trait.value) base += 15
  base += (stimulation.value - 3) * 4
  return Math.max(5, Math.min(95, base))
})

const mutationChance = computed(() => {
  if (!hasCalculated.value) return null
  return Math.max(5, Math.min(60, 5 + (mutation.value - 1) * 8 + (appeal.value - 3) * 2))
})

const inbreedingRisk = computed(() => {
  if (!hasCalculated.value) return null
  if (generationGap.value <= 3) return 'High'
  if (generationGap.value <= 6) return 'Medium'
  return 'Low'
})

function onCalculate() {
  hasCalculated.value = true
}
</script>

<style scoped>
.breeding-tool-view {
  padding-bottom: 4rem;
}

.calculator-section {
  padding: 2rem 0 3rem;
}

.tool-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
  gap: 1.75rem;
  align-items: flex-start;
}

.left-col,
.right-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.right-col {
  position: sticky;
  top: 5.5rem;
}

.panel {
  background: radial-gradient(circle at top, rgba(232, 184, 74, 0.06), transparent 55%), var(--color-bg-card);
  border-radius: 16px;
  border: 1px solid rgba(61, 56, 71, 0.85);
  padding: 1.5rem;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}

.panel-header {
  margin-bottom: 1.1rem;
}

.panel-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
  color: var(--color-text);
  text-shadow: 0 0 18px var(--color-glow-soft);
}

.panel-subtitle {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  line-height: 1.6;
}

.parents-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.parent-panel {
  border-radius: 14px;
  border: 1px solid rgba(61, 56, 71, 0.75);
  background: rgba(26, 24, 32, 0.55);
  padding: 1.1rem;
}

.parent-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.05rem;
  margin: 0 0 0.75rem;
  color: var(--color-text);
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.field-group {
  margin: 0;
}

label {
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

select,
input[type='number'],
input[type='range'] {
  width: 100%;
}

select,
input[type='number'] {
  padding: 0.625rem 0.75rem;
  border-radius: 10px;
  border: 1px solid rgba(61, 56, 71, 0.9);
  background: rgba(15, 14, 18, 0.65);
  color: var(--color-text);
}

select:focus,
input[type='number']:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-accent);
}

.slider-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.slider-list--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.slider-row {
  padding: 0.9rem;
  border-radius: 14px;
  border: 1px solid rgba(61, 56, 71, 0.7);
  background: rgba(15, 14, 18, 0.35);
}

.slider-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.slider-label {
  margin: 0;
}

.slider-value {
  font-variant-numeric: tabular-nums;
  font-size: 0.875rem;
  color: var(--color-primary);
  text-shadow: 0 0 14px rgba(232, 184, 74, 0.22);
}

input[type='range'] {
  accent-color: var(--color-primary);
}

.field-help {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  background: var(--color-cta);
  color: #0f0e12;
  transition: transform var(--transition-base), background var(--transition-base), box-shadow var(--transition-base);
}

.btn--primary {
  background: var(--color-cta);
  color: #0f0e12;
  box-shadow: 0 0 28px rgba(232, 184, 74, 0.25);
}

.btn--primary:hover {
  transform: translateY(-1px);
  background: var(--color-cta-hover);
  box-shadow: 0 0 36px rgba(232, 184, 74, 0.3);
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.note-card {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(232, 184, 74, 0.22);
  background: rgba(232, 184, 74, 0.06);
}

.note-title {
  margin: 0 0 0.35rem;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary);
}

.note-text {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.result-item {
  padding: 0.9rem;
  border-radius: 14px;
  border: 1px solid rgba(61, 56, 71, 0.7);
  background: rgba(15, 14, 18, 0.35);
}

.result-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.result-value {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--color-text);
  text-shadow: 0 0 18px rgba(232, 184, 74, 0.16);
  margin: 0;
}

.result-hint {
  margin: 0.35rem 0 0;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.disclaimer {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .tool-grid {
    grid-template-columns: 1fr;
  }

  .right-col {
    position: static;
  }

  .parents-grid {
    grid-template-columns: 1fr;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }

  .slider-list--two {
    grid-template-columns: 1fr;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }
}

.help-section {
  padding: 1rem 0 0 0;
}

@media (max-width: 768px) {
  .calculator-section {
    padding: 1rem 0 1rem;
  }

  .help-section {
    padding: 1rem 0 1rem;
  }
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

.inline-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.help-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 1.75rem;
  align-items: start;
}

.help-card {
  background: radial-gradient(circle at top, rgba(232, 184, 74, 0.05), transparent 55%), var(--color-bg-card);
  border-radius: 16px;
  border: 1px solid rgba(61, 56, 71, 0.85);
  padding: 1.5rem;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
}

.help-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.35rem;
  margin: 0 0 0.75rem;
  color: var(--color-text);
  text-shadow: 0 0 18px var(--color-glow-soft);
}

.help-lead {
  margin: 0 0 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.help-lead strong {
  color: var(--color-text);
  font-weight: 700;
}

.help-steps {
  display: grid;
  gap: 1rem;
}

.help-step {
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(61, 56, 71, 0.7);
  background: rgba(15, 14, 18, 0.32);
}

.help-step-title {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1.05rem;
  margin: 0 0 0.35rem;
  color: var(--color-text);
}

.help-text {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.help-list {
  padding-left: 1.1rem;
  margin: 0.25rem 0 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.help-list li {
  list-style: disc;
  margin: 0.25rem 0;
}

.help-list strong {
  color: var(--color-text);
  font-weight: 700;
}

.help-note {
  margin: 1rem 0 0;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(232, 184, 74, 0.22);
  background: rgba(232, 184, 74, 0.06);
  color: var(--color-text-muted);
  line-height: 1.65;
}

.faq-list {
  display: grid;
  gap: 0.9rem;
}

.faq-item {
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(61, 56, 71, 0.7);
  background: rgba(15, 14, 18, 0.32);
}

.faq-q {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 1rem;
  margin: 0 0 0.35rem;
  color: var(--color-text);
}

.faq-a {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .help-grid {
    grid-template-columns: 1fr;
  }
}
</style>

