<template>
  <TabsRoot v-model="active" class="ui-tabs">
    <TabsList class="ui-tabs-list" :aria-label="label">
      <TabsIndicator class="ui-tabs-indicator" />
      <TabsTrigger v-for="t in tabs" :key="t.label" :value="t.label" class="ui-tabs-trigger">
        {{ t.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="t in tabs" :key="t.label" :value="t.label" class="ui-tabs-content">
      <component :is="t.vnode" />
    </TabsContent>
  </TabsRoot>
</template>

<script setup>
import { ref, computed, useSlots, Fragment } from 'vue'
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
</script>

<style scoped>
.ui-tabs { margin: 20px 0; }

.ui-tabs-list {
  position: relative;
  display: flex;
  gap: 4px;
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
  transition: width 0.25s cubic-bezier(0.2, 0, 0, 1), transform 0.25s cubic-bezier(0.2, 0, 0, 1);
}

.ui-tabs-content { padding-top: 14px; }
.ui-tabs-content[data-state='active'] { animation: ui-tab-in 0.22s cubic-bezier(0.2, 0, 0, 1); }
.ui-tabs-content :deep(> div > :first-child) { margin-top: 0; }

@keyframes ui-tab-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}
</style>
