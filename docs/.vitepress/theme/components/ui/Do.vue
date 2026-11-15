<template>
  <div class="ui-do"><slot /></div>
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
</script>

<style scoped>
.ui-do {
  margin: 22px 0 10px;
  font-weight: 600;
  line-height: 28px;
  color: var(--vp-c-brand-1);
}
.ui-do :deep(p) { margin: 0; }
.ui-do :deep(code) { color: inherit; }
.ui-do :deep(a) { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
</style>
