<template>
  <span class="ui-badge" :class="`ui-badge--${type}`"><slot>{{ text }}</slot></span>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' },
  type: {
    type: String,
    default: 'green',
    validator: (v) => ['green', 'blue', 'yellow', 'red', 'purple', 'teal', 'gray'].includes(v)
  }
})
</script>

<style scoped>
.ui-badge {
  --b: var(--c-green);
  display: inline-flex;
  align-items: center;
  padding: 1px 9px;
  margin: 0 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  color: var(--b);
  border: 1px solid color-mix(in srgb, var(--b) 35%, transparent);
  background: color-mix(in srgb, var(--b) 10%, transparent);
  border-radius: 999px;
}
.ui-badge--blue { --b: var(--c-blue); }
.ui-badge--yellow { --b: var(--c-yellow); }
.ui-badge--red { --b: var(--c-red); }
.ui-badge--purple { --b: var(--c-purple); }
.ui-badge--teal { --b: var(--c-teal); }
.ui-badge--gray { --b: var(--vp-c-text-2); }
</style>
