<template>
  <TabsRoot v-model="active" class="ui-tabs">
    <TabsList class="ui-tabs-list" :aria-label="label">
      <TabsIndicator class="ui-tabs-indicator" />
      <TabsTrigger v-for="t in tabs" :key="t.label" :value="t.label" class="ui-tabs-trigger">
        {{ t.label }}
      </TabsTrigger>
    </TabsList>
    <div ref="panels" class="ui-tabs-panels">
      <div ref="inner">
        <TabsContent v-for="t in tabs" :key="t.label" :value="t.label" class="ui-tabs-content">
          <component :is="t.vnode" />
        </TabsContent>
      </div>
    </div>
  </TabsRoot>
</template>

<script setup>
import { ref, computed, useSlots, Fragment, watch, onMounted, onBeforeUnmount } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent, TabsIndicator } from 'reka-ui'

defineProps({
  // Accessible name for the tab list.
  label: { type: String, default: 'Tabs' }
})

const slots = useSlots()

// Collect <Tab label="..."> children (flattening fragments from v-for etc.).
function collect(nodes, out = []) {
  for (const n of nodes || []) {
    if (n.type === Fragment) collect(n.children, out)
    else if (n.props && n.props.label) out.push({ label: n.props.label, vnode: n })
  }
  return out
}
const tabs = computed(() => collect(slots.default?.()))
const active = ref(tabs.value[0]?.label)

// Glide the box to the new tab's height instead of snapping.
// The outer `panels` box animates to the new tab's natural height,
// measured on `inner` (which is never animated). Reka swaps the panel
// content slightly after the value changes, so we react to the actual
// DOM change with a MutationObserver rather than guessing the timing.
const panels = ref(null)
const inner = ref(null)
let heightAnim = null
let switchUntil = 0
let fromHeight = 0
let mo = null

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs the instant the tab changes, before the content swaps: remember the
// box's current height (mid-animation if the user clicks quickly).
watch(active, () => {
  fromHeight = panels.value?.getBoundingClientRect().height ?? 0
  switchUntil = performance.now() + 600
}, { flush: 'sync' })

function glide() {
  if (performance.now() > switchUntil || reduced()) return
  const box = panels.value
  const from = fromHeight
  const to = inner.value.getBoundingClientRect().height
  if (Math.abs(from - to) < 1) return
  fromHeight = to
  heightAnim?.cancel()
  heightAnim = box.animate(
    [{ height: `${from}px` }, { height: `${to}px` }],
    { duration: 320, easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)' }
  )
}

onMounted(() => {
  mo = new MutationObserver(glide)
  mo.observe(inner.value, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'data-state', 'style'] })
})
onBeforeUnmount(() => mo?.disconnect())
</script>

<style scoped>
/* The whole tab group sits in one box, so it's clear what changes per tab. */
.ui-tabs {
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.ui-tabs-list {
  position: relative;
  display: flex;
  gap: 4px;
  padding: 0 8px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  overflow-x: auto;
  scrollbar-width: none;
}

.ui-tabs-trigger {
  padding: 10px 14px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--vp-c-text-2);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
}
.ui-tabs-trigger:hover { color: var(--vp-c-text-1); }
.ui-tabs-trigger[data-state='active'] { color: var(--vp-c-brand-1); }
.ui-tabs-trigger:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: -2px; border-radius: 6px; }

.ui-tabs-indicator {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  width: var(--reka-tabs-indicator-size);
  transform: translateX(var(--reka-tabs-indicator-position));
  background: var(--vp-c-brand-1);
  border-radius: 2px;
  transition: width 0.32s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.32s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.ui-tabs-panels { overflow: hidden; }
.ui-tabs-content { padding: 16px 20px; }
.ui-tabs-content[data-state='active'] { animation: ui-tab-in 0.36s cubic-bezier(0.25, 0.8, 0.25, 1) both; }
.ui-tabs-content :deep(> div > :first-child) { margin-top: 0; }
.ui-tabs-content :deep(> div > :last-child) { margin-bottom: 0; }
/* On phones VitePress makes code blocks full-bleed; keep them inside the box. */
.ui-tabs-content :deep(div[class*='language-']) { margin-left: 0; margin-right: 0; border-radius: 8px; }

@keyframes ui-tab-in {
  from { opacity: 0; transform: translateY(3px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tabs-content[data-state='active'] { animation: none; }
  .ui-tabs-indicator { transition: none; }
}
</style>
