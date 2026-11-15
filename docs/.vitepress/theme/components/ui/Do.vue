<template>
  <div class="ui-do"><slot /></div>
</template>

<script setup>
// An instruction line in a lab: what the student has to do.
// Marked by one small dot in front; nothing else.
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
  position: relative;
  margin: 22px 0 10px;
  padding-left: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--vp-c-text-1);
}
.ui-do::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 11px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vp-c-text-2);
}
.ui-do :deep(p) { margin: 0; }
</style>
