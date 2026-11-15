<template>
  <div class="ui-check">
    <div class="ui-check__head">
      <Icon name="circle-check" :size="16" />
      <span>{{ title }}</span>
    </div>
    <div class="ui-check__body"><slot /></div>
  </div>
</template>

<script setup>
// Goes right after an Action card: what the student should see if it worked.
import Icon from './Icon.vue'

defineProps({
  title: { type: String, default: 'You should see' }
})
</script>

<style scoped>
.ui-check {
  --k: var(--c-green);
  margin: -8px 0 20px;
  padding: 10px 16px 12px;
  border: 1px solid color-mix(in srgb, var(--k) 30%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--k) 7%, transparent);
  font-size: 14px;
}
.ui-check__head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--k);
}
.ui-check__body :deep(> :first-child) { margin-top: 0; }
.ui-check__body :deep(> :last-child) { margin-bottom: 0; }
.ui-check__body :deep(div[class*='language-']) { margin: 8px 0 0; border-radius: 8px; }
.ui-check__body :deep(p) { margin: 4px 0; line-height: 1.6; }
</style>
