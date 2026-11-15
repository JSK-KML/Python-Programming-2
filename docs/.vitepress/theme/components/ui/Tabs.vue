<template>
  <TabsRoot v-model="active" class="ui-tabs">
    <TabsList class="ui-tabs-list" :aria-label="label">
      <TabsIndicator class="ui-tabs-indicator" />
      <TabsTrigger v-for="t in tabs" :key="t.label" :value="t.label" class="ui-tabs-trigger">
        {{ t.label }}
      </TabsTrigger>
    </TabsList>

    <!-- Motion animates the box to the height of whichever tab is showing. -->
    <motion.div class="ui-tabs-panels" :initial="false" :animate="boxTarget">
      <div ref="inner" class="ui-tabs-inner">
        <!-- force-mount: every tab's content stays on the page; switching only
             shows one and hides the others, so nothing is rebuilt. -->
        <TabsContent v-for="t in tabs" :key="t.label" :value="t.label" force-mount as-child>
          <motion.div
            class="ui-tabs-content"
            :initial="false"
            :animate="t.label === active ? shown : hidden"
            :inert="t.label === active ? undefined : true"
          >
            <component :is="t.vnode" />
          </motion.div>
        </TabsContent>
      </div>
    </motion.div>
  </TabsRoot>
</template>

<script setup>
import { ref, computed, useSlots, Fragment, watch, onMounted } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent, TabsIndicator } from 'reka-ui'
import { motion } from 'motion-v'
import { useElementSize, usePreferredReducedMotion } from '@vueuse/core'
import { tabGroups, loadGroup, saveGroup } from './tabs-group.js'

const props = defineProps({
  // Accessible name for the tab list.
  label: { type: String, default: 'Tabs' },
  // Optional: tab groups with the same name switch together and remember
  // the reader's choice, e.g. group="git-method" or group="terminal".
  group: { type: String, default: '' }
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

// Linked groups: pick up the saved choice after the page loads, follow
// changes made in other groups, and share this group's changes.
const hasTab = (label) => tabs.value.some((t) => t.label === label)
if (props.group) {
  onMounted(() => {
    const saved = loadGroup(props.group)
    if (saved && hasTab(saved)) active.value = saved
  })
  watch(() => tabGroups[props.group], (v) => {
    if (v && v !== active.value && hasTab(v)) active.value = v
  })
  watch(active, (v) => {
    if (v && tabGroups[props.group] !== v) saveGroup(props.group, v)
  })
}

const reduced = usePreferredReducedMotion()
const instant = { duration: 0 }
const ease = [0.25, 0.8, 0.25, 1]

// Crossfade targets for each panel. The panel being left fades out on top
// (see .ui-tabs-content[data-state='inactive'] below) while the new one fades in.
const shown = computed(() => ({
  opacity: 1,
  y: 0,
  visibility: 'visible',
  transition: reduced.value === 'reduce' ? instant : { duration: 0.3, delay: 0.05, ease }
}))
const hidden = computed(() => ({
  opacity: 0,
  y: 0,
  transitionEnd: { visibility: 'hidden' },
  transition: reduced.value === 'reduce' ? instant : { duration: 0.18, ease: 'easeOut' }
}))

// Height of the showing tab (VueUse watches its size); Motion glides the box to it.
const inner = ref(null)
const { height } = useElementSize(inner)
const boxTarget = computed(() =>
  height.value
    ? { height: height.value, transition: reduced.value === 'reduce' ? instant : { duration: 0.32, ease } }
    : {}
)
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
.ui-tabs-inner { position: relative; }
.ui-tabs-content { padding: 16px 20px; }

/* Tabs that aren't showing sit on top of the showing one, out of the flow,
   so the box only takes the showing tab's height. Before Motion takes over
   (first paint), they're simply invisible. */
.ui-tabs-content[data-state='inactive'] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.ui-tabs-content :deep(> div > :first-child) { margin-top: 0; }
.ui-tabs-content :deep(> div > :last-child) { margin-bottom: 0; }
/* On phones VitePress makes code blocks full-bleed; keep them inside the box. */
.ui-tabs-content :deep(div[class*='language-']) { margin-left: 0; margin-right: 0; border-radius: 8px; }

@media (prefers-reduced-motion: reduce) {
  .ui-tabs-indicator { transition: none; }
}
</style>
