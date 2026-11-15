<template>
  <RekaAccordionItem :value="value || title" class="ui-acc-item">
    <AccordionHeader as="div" class="ui-acc-header">
      <AccordionTrigger class="ui-acc-trigger">
        <span class="ui-acc-title">{{ title }}</span>
        <svg class="ui-acc-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent class="ui-acc-content">
      <div class="ui-acc-body"><slot /></div>
    </AccordionContent>
  </RekaAccordionItem>
</template>

<script setup>
import { AccordionItem as RekaAccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui'

defineProps({
  title: { type: String, required: true },
  // Optional unique id; defaults to the title.
  value: { type: String, default: '' }
})
</script>

<style scoped>
.ui-acc-item + .ui-acc-item { border-top: 2px solid var(--vp-c-bg); }

.ui-acc-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  color: var(--vp-c-text-1);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;
}
.ui-acc-trigger:hover { color: var(--vp-c-brand-1); }
.ui-acc-trigger:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: -2px; }
.ui-acc-trigger[data-state='open'] { color: var(--vp-c-brand-1); }

.ui-acc-chevron {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1), color 0.15s ease;
}
.ui-acc-trigger[data-state='open'] .ui-acc-chevron {
  transform: rotate(180deg);
  color: var(--vp-c-brand-1);
}

.ui-acc-content { overflow: hidden; }
.ui-acc-content[data-state='open'] { animation: ui-acc-down 0.25s cubic-bezier(0.2, 0, 0, 1); }
.ui-acc-content[data-state='closed'] { animation: ui-acc-up 0.2s cubic-bezier(0.2, 0, 0, 1); }

.ui-acc-body { padding: 0 20px 14px; color: var(--vp-c-text-2); }
.ui-acc-body :deep(> :first-child) { margin-top: 0; }
.ui-acc-body :deep(> :last-child) { margin-bottom: 0; }
.ui-acc-body :deep(div[class*='language-']) { background: var(--vp-c-bg); }

@keyframes ui-acc-down {
  from { height: 0; opacity: 0; }
  to { height: var(--reka-accordion-content-height); opacity: 1; }
}
@keyframes ui-acc-up {
  from { height: var(--reka-accordion-content-height); opacity: 1; }
  to { height: 0; opacity: 0; }
}
</style>
