<template>
  <AccordionRoot
    class="ui-accordion"
    :type="multiple ? 'multiple' : 'single'"
    :collapsible="true"
  >
    <slot />
  </AccordionRoot>
</template>

<script setup>
import { AccordionRoot } from 'reka-ui'

defineProps({
  // Allow several panels open at once (default) or only one.
  multiple: { type: Boolean, default: true }
})
</script>

<style scoped>
.ui-accordion {
  margin: 20px 0;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}
</style>
