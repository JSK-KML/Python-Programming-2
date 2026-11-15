<template>
  <TooltipProvider :delay-duration="150">
    <TooltipRoot>
      <TooltipTrigger as="span" class="ui-term" tabindex="0">
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent class="ui-term-tip" side="top" :side-offset="6" :collision-padding="12">
          <strong v-if="title" class="ui-term-tip__title">{{ title }}</strong>
          {{ def }}
          <TooltipArrow class="ui-term-tip__arrow" :width="10" :height="5" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui'

defineProps({
  // The definition shown in the tooltip.
  def: { type: String, required: true },
  // Optional bold heading in the tooltip.
  title: { type: String, default: '' }
})
</script>

<style scoped>
.ui-term {
  border-bottom: 1.5px dashed var(--vp-c-brand-1);
  cursor: help;
  transition: color 0.15s ease;
}
.ui-term:hover,
.ui-term:focus-visible { color: var(--vp-c-brand-1); outline: none; }
</style>

<!-- Tooltip is teleported to <body>, so its styles can't be scoped. -->
<style>
.ui-term-tip {
  z-index: 100;
  max-width: 280px;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transform-origin: var(--reka-tooltip-content-transform-origin);
}
.ui-term-tip[data-state='delayed-open'],
.ui-term-tip[data-state='instant-open'] { animation: ui-tip-in 0.16s cubic-bezier(0.2, 0, 0, 1); }
.ui-term-tip[data-state='closed'] { animation: ui-tip-out 0.1s ease-in; }
.ui-term-tip__title { display: block; margin-bottom: 2px; color: var(--vp-c-brand-1); }
.ui-term-tip__arrow { fill: var(--vp-c-bg-elv); stroke: var(--vp-c-divider); }

@keyframes ui-tip-in {
  from { opacity: 0; transform: translateY(4px) scale(0.97); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tip-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
