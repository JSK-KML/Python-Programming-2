<template>
  <div class="ui-check">
    <div class="ui-check__label">{{ title }}</div>
    <div class="ui-check__body"><slot /></div>
  </div>
</template>

<script setup>
// Goes right after an Action: what the student should see if it worked.
// No box: a small label, then the expected result. Output shown in a code
// block is drawn as plain text so it doesn't look like a command to run.
defineProps({
  title: { type: String, default: 'You should see' }
})
</script>

<style scoped>
.ui-check { margin: -6px 0 22px; }
.ui-check__label {
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}
.ui-check__body { color: var(--vp-c-text-2); }
.ui-check__body :deep(> :first-child) { margin-top: 0; }
.ui-check__body :deep(> :last-child) { margin-bottom: 0; }
.ui-check__body :deep(p) { margin: 4px 0; }

/* Expected output: plain text, not a command box. */
.ui-check__body :deep(div[class*='language-']) {
  margin: 4px 0 0;
  background: transparent;
  border-radius: 0;
}
.ui-check__body :deep(div[class*='language-'] pre) { padding: 0; }
.ui-check__body :deep(div[class*='language-'] code) { padding: 0; color: var(--vp-c-text-2); }
.ui-check__body :deep(div[class*='language-'] code span:not(.ud-fill)) { color: var(--vp-c-text-2) !important; }
.ui-check__body :deep(div[class*='language-'] .copy),
.ui-check__body :deep(div[class*='language-'] .lang) { display: none; }
</style>
