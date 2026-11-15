<template>
  <component
    :is="link ? 'a' : 'div'"
    class="ui-info"
    :class="{ 'is-link': link }"
    :href="url"
    :style="{ '--a': accent }"
  >
    <div class="ui-info__head">
      <span v-if="icon" class="ui-info__icon"><Icon :name="icon" :size="20" /></span>
      <div class="ui-info__heading">
        <span v-if="tag || badge" class="ui-info__meta">
          <span class="ui-info__tag">{{ tag }}</span>
          <span v-if="badge" class="ui-info__badge">{{ badge }}</span>
        </span>
        <span class="ui-info__title">{{ title }}</span>
      </div>
    </div>
    <div v-if="$slots.default" class="ui-info__body"><slot /></div>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import Icon from './Icon.vue'
import { accents } from './accent.js'

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  tag: { type: String, default: '' },
  // Small pill in the top-right corner, e.g. "4 topics"
  badge: { type: String, default: '' },
  link: { type: String, default: '' },
  color: { type: String, default: 'green' }
})

const accent = computed(() => accents[props.color] || accents.green)
const url = computed(() => {
  if (!props.link) return undefined
  return /^(https?:)?\/\//.test(props.link) ? props.link : withBase(props.link)
})
</script>

<style scoped>
.vp-doc a.ui-info,
.ui-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  color: inherit;
  font-weight: 400;
  text-decoration: none;
  background: var(--vp-c-bg);
  background-image: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: border-color 0.2s ease, transform 0.2s cubic-bezier(0.2, 0, 0, 1);
}
.ui-info.is-link:hover { border-color: var(--vp-c-text-3); transform: translateY(-2px); }
.ui-info__head { display: flex; align-items: center; gap: 12px; }
.ui-info__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  color: var(--a);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1);
}
.ui-info.is-link:hover .ui-info__icon { transform: translateY(-1px); }
.ui-info__heading { display: flex; flex-direction: column; min-width: 0; flex: 1; }
.ui-info__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 20px;
}
.ui-info__tag {
  white-space: nowrap;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--a);
}
.ui-info__title { font-size: 16px; font-weight: 700; line-height: 1.35; color: var(--vp-c-text-1); }
.ui-info__badge {
  flex-shrink: 0;
  padding: 0 8px;
  font-size: 11px;
  line-height: 18px;
  white-space: nowrap;
  font-weight: 600;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
}
.ui-info__body { font-size: 14px; line-height: 1.6; color: var(--vp-c-text-2); }
.ui-info__body :deep(p) { margin: 0 0 8px; }
.ui-info__body :deep(> :last-child), .ui-info__body :deep(p:last-child) { margin-bottom: 0; }
.ui-info__body :deep(ul) { margin: 4px 0 0; padding-left: 18px; }
.ui-info__body :deep(li) { margin: 2px 0; }

</style>
