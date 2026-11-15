<template>
  <div class="ui-action" :class="`ui-action--${type}`">
    <div class="ui-action__head">
      <Icon :name="type === 'run' ? 'terminal' : 'mouse-pointer-click'" :size="16" />
      <span>{{ title || (type === 'run' ? 'Run in Git Bash' : 'Do this') }}</span>
    </div>
    <div class="ui-action__body"><slot /></div>
  </div>
</template>

<script setup>
// The only place an instruction appears in a lab: one action per card.
import Icon from './Icon.vue'

defineProps({
  // 'run' = a command to type in Git Bash, 'do' = something to click or do.
  type: { type: String, default: 'run', validator: (v) => ['run', 'do'].includes(v) },
  // Optional custom header text.
  title: { type: String, default: '' }
})
</script>

<style scoped>
.ui-action {
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  overflow: hidden;
}
.ui-action__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.ui-action__body { padding: 14px 16px; }
.ui-action__body :deep(> :first-child) { margin-top: 0; }
.ui-action__body :deep(> :last-child) { margin-bottom: 0; }
/* Keep code blocks inside the card on phones (VitePress makes them full-bleed). */
.ui-action__body :deep(div[class*='language-']) { margin-left: 0; margin-right: 0; border-radius: 8px; }
/* A card that is only a code block: let the code fill the card. */
.ui-action__body:has(> div[class*='language-']:only-child) { padding: 0; }
.ui-action__body :deep(> div[class*='language-']:only-child) { margin: 0; border-radius: 0; }
</style>
