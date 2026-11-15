<template>
  <ol
    ref="root"
    class="ui-timeline"
    :class="[`ui-timeline--${layout}`, { 'has-progress': progress, 'has-focus': focus }]"
    :style="{ '--tl-fill': fill }"
  >
    <span v-if="progress" class="ui-timeline__fill" aria-hidden="true"></span>
    <slot />
  </ol>
</template>

<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // 'left' (default): line on the left. 'alternate': items either side of a centre line.
  layout: { type: String, default: 'left', validator: (v) => ['left', 'alternate'].includes(v) },
  // Line fills with colour as you scroll through the timeline.
  progress: { type: Boolean, default: false },
  // Item nearest the middle of the screen is highlighted; others fade back.
  focus: { type: Boolean, default: false }
})

provide('timelineLayout', props.layout)

const root = ref(null)
const fill = ref(0)
let raf = 0

function update() {
  raf = 0
  const el = root.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const mid = window.innerHeight * 0.5

  if (props.progress) {
    fill.value = Math.min(1, Math.max(0, (mid - rect.top) / rect.height))
  }
  if (props.progress || props.focus) {
    const items = el.querySelectorAll(':scope > .ui-tl-item')
    let active = -1
    items.forEach((li, i) => {
      if (li.getBoundingClientRect().top <= mid) active = i
    })
    // Before the timeline reaches the middle, nothing is active yet.
    items.forEach((li, i) => {
      li.classList.toggle('is-active', i === active)
      li.classList.toggle('is-past', i < active)
    })
  }
}
function onScroll() {
  if (!raf) raf = requestAnimationFrame(update)
}

onMounted(() => {
  if (!props.progress && !props.focus) return
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
.vp-doc .ui-timeline,
.ui-timeline {
  --tl-x: 6px; /* centre of the line */
  position: relative;
  list-style: none;
  margin: 24px 0;
  padding: 0 0 0 26px;
}
/* track */
.ui-timeline::before {
  content: '';
  position: absolute;
  left: var(--tl-x);
  top: 6px;
  bottom: 6px;
  width: 2px;
  margin-left: -1px;
  background: var(--vp-c-divider);
  border-radius: 2px;
}
/* scroll-linked fill */
.ui-timeline__fill {
  position: absolute;
  left: var(--tl-x);
  top: 6px;
  bottom: 6px;
  width: 2px;
  margin-left: -1px;
  background: var(--vp-c-brand-1);
  border-radius: 2px;
  transform-origin: top;
  transform: scaleY(var(--tl-fill));
  transition: transform 0.08s linear;
}

/* Alternating layout (desktop only; falls back to left layout on small screens) */
@media (min-width: 720px) {
  .vp-doc .ui-timeline--alternate,
  .ui-timeline--alternate {
    --tl-x: 50%;
    padding: 0;
  }
}
</style>
