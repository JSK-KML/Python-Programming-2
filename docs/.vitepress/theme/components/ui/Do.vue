<template>
  <div class="ui-do">
    <span class="ui-do__icon" aria-hidden="true"><Icon name="circle-chevron-right" :size="17" /></span>
    <div class="ui-do__text"><slot /></div>
  </div>
</template>

<script setup>
// An instruction line in a lab: what the student has to do (run, read, click...).
// One small grey circle-chevron icon in front marks it as an instruction.
// Plain text can go on one line:
//   <Do>Run these in Git Bash:</Do>
// With markdown inside (links, `code`), leave blank lines around it:
//   <Do>
//
//   Open the [CP125-Class-Repo](...) on GitHub and click `Fork`.
//
//   </Do>
import Icon from './Icon.vue'
</script>

<style scoped>
.ui-do {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 22px 0 10px;
  font-weight: 600;
  line-height: 28px;
  color: var(--vp-c-text-1);
}
.ui-do__icon {
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 5.5px;
  color: var(--vp-c-text-2);
}
.ui-do__text { min-width: 0; }
.ui-do__text :deep(p) { margin: 0; }
</style>
