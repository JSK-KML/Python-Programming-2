<template>
  <div ref="el" class="ui-stat" :style="{ '--a': accent }">
    <div class="ui-stat__top">
      <span v-if="icon" class="ui-stat__icon"><Icon :name="icon" :size="18" /></span>
      <span class="ui-stat__label">{{ label }}</span>
    </div>
    <div class="ui-stat__value">
      <span>{{ display }}</span><span v-if="suffix" class="ui-stat__suffix">{{ suffix }}</span>
    </div>
    <div v-if="progress !== null" class="ui-stat__bar" :aria-label="`${progress}%`">
      <span :style="{ transform: `scaleX(${shownProgress / 100})` }"></span>
    </div>
    <div v-if="note" class="ui-stat__note">{{ note }}</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'
import { accents } from './accent.js'

const props = defineProps({
  // Number to show. Non-numeric strings are shown as-is (no count-up).
  value: { type: [Number, String], required: true },
  label: { type: String, required: true },
  icon: { type: String, default: '' },
  suffix: { type: String, default: '' },
  note: { type: String, default: '' },
  // Optional 0–100 progress bar under the number.
  progress: { type: Number, default: null },
  color: { type: String, default: 'green' }
})

const accent = computed(() => accents[props.color] || accents.green)
const target = computed(() => Number(props.value))
const numeric = computed(() => typeof props.value === 'number' || /^\d+(\.\d+)?$/.test(String(props.value)))

// Server render shows the final value; the client counts up once visible.
const current = ref(null)
const shownProgress = ref(props.progress ?? 0)
const display = computed(() => {
  if (!numeric.value) return props.value
  const v = current.value === null ? target.value : current.value
  return Number.isInteger(target.value) ? Math.round(v) : v.toFixed(1)
})

const el = ref(null)
let io = null
let raf = 0

function animate() {
  const start = performance.now()
  const dur = 900
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur)
    const e = 1 - Math.pow(1 - t, 3)
    current.value = target.value * e
    if (props.progress !== null) shownProgress.value = props.progress * e
    if (t < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!numeric.value && props.progress === null) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  current.value = 0
  shownProgress.value = 0
  io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      io.disconnect()
      animate()
    }
  }, { threshold: 0.4 })
  io.observe(el.value)
})
onBeforeUnmount(() => {
  io?.disconnect()
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
.ui-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.2s ease, transform 0.2s cubic-bezier(0.2, 0, 0, 1);
}
.ui-stat:hover { border-color: var(--vp-c-text-3); transform: translateY(-2px); }
.ui-stat__top { display: flex; align-items: center; gap: 10px; }
.ui-stat__icon {
  display: grid;
  place-items: center;
  color: var(--a);
}
.ui-stat__label { font-size: 13px; font-weight: 600; color: var(--vp-c-text-2); }
.ui-stat__value {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--a);
}
.ui-stat__suffix { margin-left: 2px; font-size: 18px; font-weight: 700; color: var(--vp-c-text-2); }
.ui-stat__bar {
  height: 6px;
  border-radius: 6px;
  background: var(--vp-c-divider);
  overflow: hidden;
}
.ui-stat__bar span {
  display: block;
  height: 100%;
  background: var(--a);
  border-radius: 6px;
  transform-origin: left;
}
.ui-stat__note { font-size: 12px; color: var(--vp-c-text-3); }
</style>
