<template>
  <div class="ui-action" :class="`ui-action--${type}`">
    <div class="ui-action__label">{{ title || (type === 'run' ? 'Run in Git Bash' : 'Do this') }}</div>
    <div class="ui-action__body"><slot /></div>
  </div>
</template>

<script setup>
// The only place an instruction appears in a lab: one action per block.
// 'run': a Git Bash command; the code block itself is the box.
// 'do':  something to click or do; shown on a plain tinted background.
defineProps({
  type: { type: String, default: 'run', validator: (v) => ['run', 'do'].includes(v) },
  // Optional custom label.
  title: { type: String, default: '' }
})
</script>

<style scoped>
.ui-action { margin: 20px 0; }
.ui-action__label {
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
.ui-action__body :deep(> :first-child) { margin-top: 0; }
.ui-action__body :deep(> :last-child) { margin-bottom: 0; }
/* Keep code blocks inside the column on phones (VitePress makes them full-bleed). */
.ui-action__body :deep(div[class*='language-']) { margin-left: 0; margin-right: 0; border-radius: 8px; }

.ui-action--do .ui-action__label { margin-bottom: 0; padding: 12px 16px 0; }
.ui-action--do {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
.ui-action--do .ui-action__body { padding: 6px 16px 14px; }
.ui-action--do .ui-action__body :deep(div[class*='language-']) { background: var(--vp-c-bg); }
</style>
