<template>
  <div class="ui-fc" @keydown="onKey">
    <div class="ui-fc__progress" aria-hidden="true">
      <div class="ui-fc__bar" :style="{ width: ((index + 1) / cards.length) * 100 + '%' }"></div>
    </div>

    <button
      class="ui-fc__card"
      :class="{ 'is-flipped': flipped }"
      :aria-label="flipped ? 'Show question' : 'Show answer'"
      @click="flipped = !flipped"
    >
      <span class="ui-fc__inner">
        <span class="ui-fc__face ui-fc__front">
          <span class="ui-fc__side">Question</span>
          <span class="ui-fc__content">{{ current.front }}</span>
          <span class="ui-fc__hint">Click or press Space to reveal</span>
        </span>
        <span class="ui-fc__face ui-fc__back">
          <span class="ui-fc__side">Answer</span>
          <span class="ui-fc__content">{{ current.back }}</span>
        </span>
      </span>
    </button>

    <div class="ui-fc__controls">
      <button class="ui-fc__nav" :disabled="index === 0" aria-label="Previous card" @click="go(-1)">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 6-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <span class="ui-fc__count">{{ index + 1 }} / {{ cards.length }}</span>
      <button class="ui-fc__nav" :disabled="index === cards.length - 1" aria-label="Next card" @click="go(1)">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <button class="ui-fc__shuffle" @click="shuffle">Shuffle</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // [{ front: 'Question', back: 'Answer' }, ...]
  cards: { type: Array, required: true }
})

const order = ref(props.cards.map((_, i) => i))
const index = ref(0)
const flipped = ref(false)
const current = computed(() => props.cards[order.value[index.value]])

function go(step) {
  const next = index.value + step
  if (next < 0 || next >= props.cards.length) return
  flipped.value = false
  index.value = next
}
function shuffle() {
  const a = [...order.value]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  order.value = a
  index.value = 0
  flipped.value = false
}
function onKey(e) {
  if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'ArrowLeft') go(-1)
}
</script>

<style scoped>
.ui-fc { margin: 24px 0; }

.ui-fc__progress {
  height: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
  background: var(--vp-c-divider);
  overflow: hidden;
}
.ui-fc__bar {
  height: 100%;
  background: var(--vp-c-brand-1);
  border-radius: 4px;
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1);
}

.ui-fc__card {
  display: block;
  width: 100%;
  padding: 0;
  font: inherit;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  perspective: 1200px;
}
.ui-fc__card:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; border-radius: 14px; }

.ui-fc__inner {
  position: relative;
  display: grid;
  min-height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
}
.ui-fc__card.is-flipped .ui-fc__inner { transform: rotateY(180deg); }

.ui-fc__face {
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 28px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.ui-fc__back {
  transform: rotateY(180deg);
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 7%, var(--vp-c-bg));
}
.ui-fc__side {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.ui-fc__content { font-size: 18px; font-weight: 600; line-height: 1.5; color: var(--vp-c-text-1); }
.ui-fc__hint { font-size: 12px; color: var(--vp-c-text-3); }

.ui-fc__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
}
.ui-fc__nav {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.1s ease, opacity 0.15s ease;
}
.ui-fc__nav svg { width: 18px; height: 18px; }
.ui-fc__nav:not(:disabled):hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.ui-fc__nav:not(:disabled):active { transform: scale(0.92); }
.ui-fc__nav:disabled { opacity: 0.35; cursor: default; }
.ui-fc__count { min-width: 56px; font-size: 14px; font-weight: 600; text-align: center; font-variant-numeric: tabular-nums; color: var(--vp-c-text-2); }
.ui-fc__shuffle {
  position: absolute;
  right: 0;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: none;
  border: none;
  cursor: pointer;
}
.ui-fc__controls { position: relative; }
.ui-fc__shuffle:hover { color: var(--vp-c-brand-1); }

@media (prefers-reduced-motion: reduce) {
  .ui-fc__inner { transition: none; }
}
</style>
