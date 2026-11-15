<template>
  <li
    v-motion
    class="ui-tl-item"
    :class="{ 'ui-tl-item--done': done }"
    :initial="reduced ? undefined : enterFrom"
    :visible-once="reduced ? undefined : { opacity: 1, x: 0, y: 0, transition: { duration: 420, ease: [0.2, 0, 0, 1] } }"
  >
    <span class="ui-tl-dot" aria-hidden="true"></span>
    <div class="ui-tl-card">
      <div class="ui-tl-meta">
        <span v-if="date" class="ui-tl-date">{{ date }}</span>
        <span class="ui-tl-title">{{ title }}</span>
      </div>
      <div class="ui-tl-body"><slot /></div>
    </div>
  </li>
</template>

<script setup>
import { ref, inject, onBeforeMount } from 'vue'

defineProps({
  title: { type: String, required: true },
  // e.g. "Week 1" or "12 Jan"
  date: { type: String, default: '' },
  // Marks the item as completed (filled dot).
  done: { type: Boolean, default: false }
})

const layout = inject('timelineLayout', 'left')
// Alternating items rise up; left-aligned items slide in from the line.
const enterFrom = layout === 'alternate' ? { opacity: 0, y: 24 } : { opacity: 0, x: -14 }

const reduced = ref(false)
onBeforeMount(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
.vp-doc .ui-tl-item,
.ui-tl-item {
  position: relative;
  margin: 0 0 22px;
  padding: 0;
}
.ui-tl-item:last-child { margin-bottom: 0; }

.ui-tl-dot {
  position: absolute;
  z-index: 1;
  left: -26px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  transition: background-color 0.25s ease, transform 0.25s cubic-bezier(0.2, 0, 0, 1);
}
.ui-tl-item--done .ui-tl-dot { background: var(--vp-c-brand-1); }
.ui-tl-item:hover .ui-tl-dot { background: var(--vp-c-brand-soft); }
.ui-tl-item--done:hover .ui-tl-dot { background: var(--vp-c-brand-1); }

.ui-tl-card { transition: opacity 0.3s ease; }
.ui-tl-meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; }
.ui-tl-date {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.ui-tl-title { font-size: 15px; font-weight: 700; color: var(--vp-c-text-1); transition: color 0.25s ease; }
.ui-tl-body { margin-top: 2px; font-size: 14px; color: var(--vp-c-text-2); }
.ui-tl-body :deep(p) { margin: 4px 0; }
</style>

<!-- State set by the parent <Timeline> (classes on its <ol>), so these can't be scoped. -->
<style>
/* ---- progress: dots fill once the line reaches them ---- */
.ui-timeline.has-progress .ui-tl-item.is-past .ui-tl-dot,
.ui-timeline.has-progress .ui-tl-item.is-active .ui-tl-dot,
.ui-timeline.has-focus .ui-tl-item.is-past .ui-tl-dot,
.ui-timeline.has-focus .ui-tl-item.is-active .ui-tl-dot { background: var(--vp-c-brand-1); }

/* ---- focus: highlight the active item, fade the rest ---- */
.ui-timeline.has-focus .ui-tl-item .ui-tl-card { opacity: 0.4; }
.ui-timeline.has-focus .ui-tl-item.is-active .ui-tl-card { opacity: 1; }
.ui-timeline.has-focus .ui-tl-item.is-active .ui-tl-dot { transform: scale(1.3); }
.ui-timeline.has-focus .ui-tl-item.is-active .ui-tl-title { color: var(--vp-c-brand-1); }

/* ---- alternating layout (desktop) ---- */
@media (min-width: 720px) {
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item {
    width: 50%;
    margin-bottom: 28px;
  }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item:nth-child(odd of .ui-tl-item) {
    padding-right: 36px;
    text-align: right;
  }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item:nth-child(even of .ui-tl-item) {
    margin-left: 50%;
    padding-left: 36px;
  }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item:nth-child(odd of .ui-tl-item) .ui-tl-meta { justify-content: flex-end; }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item:nth-child(odd of .ui-tl-item) .ui-tl-dot { left: auto; right: -7px; }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item:nth-child(even of .ui-tl-item) .ui-tl-dot { left: -7px; }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-item .ui-tl-dot { top: 16px; }
  .vp-doc .ui-timeline.ui-timeline--alternate .ui-tl-card {
    padding: 12px 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg-soft);
  }
}
</style>
