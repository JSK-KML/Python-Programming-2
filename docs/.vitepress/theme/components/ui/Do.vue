<template>
  <div class="ui-do">
    <!-- All icons are rendered; CSS shows one depending on what follows the line:
         a terminal box -> terminal, another code box (a file to create) -> file,
         anything else -> click. No JS, no lab changes. -->
    <span class="ui-do__icon ui-do__icon--run" aria-hidden="true"><Icon name="terminal" :size="16" /></span>
    <span class="ui-do__icon ui-do__icon--file" aria-hidden="true"><Icon name="file-text" :size="16" /></span>
    <span class="ui-do__icon ui-do__icon--do" aria-hidden="true"><Icon name="mouse-pointer-click" :size="16" /></span>
    <div class="ui-do__text"><slot /></div>
  </div>
</template>

<script setup>
// An instruction line in a lab: what the student has to do.
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
  margin-top: 6px;
  color: var(--vp-c-text-3);
}
.ui-do__icon--run,
.ui-do__icon--file { display: none; }
/* A code box follows: hide the click icon, then pick terminal or file. */
.ui-do:has(+ div[class*='language-']) .ui-do__icon--do { display: none; }
.ui-do:has(+ div.language-console) .ui-do__icon--run { display: inline-flex; }
.ui-do:has(+ div[class*='language-']:not(.language-console)) .ui-do__icon--file { display: inline-flex; }

.ui-do__text { min-width: 0; }
.ui-do__text :deep(p) { margin: 0; }
</style>
