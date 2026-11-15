<template>
  <section ref="root" class="ui-st" :style="{ '--st-steps': steps.length }">
    <div class="ui-st__pin">
      <div class="ui-st__frame">
        <!-- left: the step list with a line that fills as you go -->
        <ol class="ui-st__list" :style="{ '--st-fill': fill }">
          <span class="ui-st__track" aria-hidden="true"><span class="ui-st__fill"></span></span>
          <li
            v-for="(s, i) in steps"
            :key="i"
            class="ui-st__step"
            :class="{ 'is-active': i === active, 'is-past': i < active }"
          >
            <button class="ui-st__step-btn" @click="goTo(i)">
              <span class="ui-st__dot" aria-hidden="true"></span>
              <span class="ui-st__step-text">
                <span v-if="s.date" class="ui-st__date">{{ s.date }}</span>
                <span class="ui-st__name">{{ s.title }}</span>
              </span>
            </button>
          </li>
        </ol>

        <!-- right: the active step's content, swapped in place -->
        <div class="ui-st__panel" aria-live="polite">
          <div class="ui-st__count">{{ active + 1 }} / {{ steps.length }}</div>
          <div class="ui-st__stack">
            <article
              v-for="(s, i) in steps"
              :key="i"
              class="ui-st__card"
              :class="{ 'is-active': i === active, 'is-before': i < active }"
              :aria-hidden="i !== active"
            >
              <span v-if="s.date" class="ui-st__card-date">{{ s.date }}</span>
              <h3 class="ui-st__card-title">{{ s.title }}</h3>
              <div class="ui-st__card-body"><component :is="s.vnode" /></div>
            </article>
          </div>
          <div class="ui-st__hint" :class="{ 'is-hidden': active > 0 }">Scroll to continue</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, useSlots, Fragment, onMounted, onBeforeUnmount } from 'vue'

// A pinned ("scrollytelling") timeline: the section stays fixed on screen while
// you scroll through it, and only the active step changes. Children are
// <ScrollStep title="..." date="..."> elements.
const slots = useSlots()
function collect(nodes, out = []) {
  for (const n of nodes || []) {
    if (n.type === Fragment) collect(n.children, out)
    else if (n.props && n.props.title) out.push({ title: n.props.title, date: n.props.date || '', vnode: n })
  }
  return out
}
const steps = computed(() => collect(slots.default?.()))

const root = ref(null)
const active = ref(0)
const fill = ref(0)
let raf = 0

function metrics() {
  const el = root.value
  const pin = el.querySelector('.ui-st__pin')
  const rect = el.getBoundingClientRect()
  const top = parseFloat(getComputedStyle(pin).top) || 0
  // Distance over which the pinned frame stays still.
  const travel = rect.height - pin.offsetHeight
  return { rect, top, travel }
}

function update() {
  raf = 0
  if (!root.value) return
  const { rect, top, travel } = metrics()
  const p = travel > 0 ? Math.min(1, Math.max(0, (top - rect.top) / travel)) : 0
  const n = steps.value.length
  active.value = Math.min(n - 1, Math.floor(p * n))
  fill.value = n > 1 ? active.value / (n - 1) : 1
}
function onScroll() {
  if (!raf) raf = requestAnimationFrame(update)
}

// Clicking a step scrolls the page to that step's position.
function goTo(i) {
  const { rect, top, travel } = metrics()
  const n = steps.value.length
  const y = window.scrollY + rect.top - top + ((i + 0.5) / n) * travel
  window.scrollTo({ top: y, behavior: 'smooth' })
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
/* Tall outer section creates the scroll distance; each step gets ~70% of a screen. */
.ui-st {
  position: relative;
  height: calc(var(--st-steps) * 70vh + 100vh);
  margin: 32px 0;
}
.ui-st__pin {
  position: sticky;
  top: calc(var(--vp-nav-height, 64px) + 24px);
  height: calc(100vh - var(--vp-nav-height, 64px) - 48px);
  display: flex;
  align-items: center;
}
.ui-st__frame {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 24px;
  width: 100%;
  max-height: 100%;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
}

/* ---- step list ---- */
.vp-doc .ui-st__list,
.ui-st__list {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  align-self: center;
}
.ui-st__track {
  position: absolute;
  left: 11px;
  top: 14px;
  bottom: 14px;
  width: 2px;
  background: var(--vp-c-divider);
  border-radius: 2px;
}
.ui-st__fill {
  position: absolute;
  inset: 0;
  background: var(--vp-c-brand-1);
  border-radius: 2px;
  transform-origin: top;
  transform: scaleY(var(--st-fill));
  transition: transform 0.35s cubic-bezier(0.2, 0, 0, 1);
}
.vp-doc .ui-st__step,
.ui-st__step { position: relative; margin: 0; }
.ui-st__step-btn {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 14px;
  padding: 7px 0;
  font: inherit;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}
.ui-st__dot {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s cubic-bezier(0.2, 0, 0, 1);
}
.ui-st__step.is-past .ui-st__dot { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-1); }
.ui-st__step.is-active .ui-st__dot {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  box-shadow: inset 0 0 0 4px var(--vp-c-bg), inset 0 0 0 12px var(--vp-c-brand-1);
  transform: scale(1.1);
}
.ui-st__step-text { display: flex; flex-direction: column; min-width: 0; }
.ui-st__date {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  transition: color 0.3s ease;
}
.ui-st__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  transition: color 0.3s ease;
}
.ui-st__step.is-past .ui-st__name { color: var(--vp-c-text-2); }
.ui-st__step.is-active .ui-st__date { color: var(--vp-c-brand-1); }
.ui-st__step.is-active .ui-st__name { color: var(--vp-c-text-1); }
.ui-st__step-btn:hover .ui-st__name { color: var(--vp-c-brand-1); }
.ui-st__step-btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; border-radius: 6px; }

/* ---- content panel ---- */
.ui-st__panel {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 260px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}
.ui-st__count {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
}
/* All cards share one grid cell so the panel keeps a steady height. */
.ui-st__stack { display: grid; }
.ui-st__card {
  grid-area: 1 / 1;
  opacity: 0;
  transform: translateY(16px);
  pointer-events: none;
  transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0, 0, 1);
}
.ui-st__card.is-before { transform: translateY(-16px); }
.ui-st__card.is-active { opacity: 1; transform: none; pointer-events: auto; }
.ui-st__card-date {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.vp-doc .ui-st__card-title,
.ui-st__card-title {
  margin: 4px 0 10px;
  padding: 0;
  border: none;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}
.ui-st__card-body { font-size: 15px; line-height: 1.7; color: var(--vp-c-text-2); }
.ui-st__card-body :deep(p) { margin: 0 0 10px; }
.ui-st__card-body :deep(> div > :last-child) { margin-bottom: 0; }

.ui-st__hint {
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--vp-c-text-3);
  transition: opacity 0.3s ease;
}
.ui-st__hint.is-hidden { opacity: 0; }

/* ---- small screens: compact step list on top, content below ---- */
@media (max-width: 720px) {
  .ui-st { height: calc(var(--st-steps) * 60vh + 100vh); }
  .ui-st__pin { top: calc(var(--vp-nav-height, 64px) + 12px); height: calc(100vh - var(--vp-nav-height, 64px) - 24px); }
  .ui-st__frame { grid-template-columns: 1fr; gap: 14px; padding: 14px; }
  .ui-st__list { display: flex; justify-content: space-between; }
  .ui-st__track { left: 12px; right: 12px; top: 11px; bottom: auto; width: auto; height: 2px; }
  .ui-st__fill { transform-origin: left; transform: scaleX(var(--st-fill)); }
  .ui-st__step-btn { padding: 0; }
  .ui-st__step-text { display: none; }
  .ui-st__panel { min-height: 0; padding: 18px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-st__card { transform: none !important; }
}
</style>
