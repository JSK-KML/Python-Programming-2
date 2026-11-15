<template>
  <a class="ui-link-card" :href="url">
    <span class="ui-link-card__body">
      <span v-if="tag" class="ui-link-card__tag">{{ tag }}</span>
      <span class="ui-link-card__title">{{ title }}</span>
      <span v-if="details" class="ui-link-card__details">{{ details }}</span>
    </span>
    <svg class="ui-link-card__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
  details: { type: String, default: '' },
  // Small label above the title, e.g. "Chapter 1".
  tag: { type: String, default: '' }
})

const url = computed(() => (/^(https?:)?\/\//.test(props.link) ? props.link : withBase(props.link)))
</script>

<style scoped>
.vp-doc a.ui-link-card,
.ui-link-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  color: inherit;
  font-weight: 400;
  text-decoration: none;
  background: var(--vp-c-bg-soft);
  background-image: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: border-color 0.2s ease, transform 0.2s cubic-bezier(0.2, 0, 0, 1);
}
.ui-link-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.ui-link-card__body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.ui-link-card__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.ui-link-card__title { font-size: 15px; font-weight: 700; color: var(--vp-c-text-1); }
.ui-link-card__details { font-size: 13px; line-height: 1.5; color: var(--vp-c-text-2); }
.ui-link-card__arrow {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1), color 0.2s ease;
}
.ui-link-card:hover .ui-link-card__arrow { transform: translateX(4px); color: var(--vp-c-brand-1); }
</style>
