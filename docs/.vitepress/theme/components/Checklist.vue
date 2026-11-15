<template>
  <div
    v-motion
    class="checklist"
    :class="`checklist--${color}`"
    :initial="reduced ? undefined : { opacity: 0, y: 16 }"
    :visible-once="reduced ? undefined : { opacity: 1, y: 0, transition: { duration: 420, ease: [0.2, 0, 0, 1] } }"
  >
    <div v-if="title" class="checklist__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

// Skip the scroll-in animation for users who ask for reduced motion.
const reduced = ref(false)
onBeforeMount(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

defineProps({
  // Accent color for the card.
  color: {
    type: String,
    default: 'blue',
    validator: (v) => ['yellow', 'green', 'pink', 'blue'].includes(v)
  },
  // Optional heading shown at the top of the card.
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.checklist {
  --cl-accent: var(--vp-c-brand-1);
  margin: 20px 0;
  padding: 6px 20px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.checklist--yellow { --cl-accent: var(--c-yellow); }
.checklist--green { --cl-accent: var(--c-green); }
.checklist--pink { --cl-accent: #d6336c; }
.checklist--blue { --cl-accent: var(--c-blue); }

.checklist__title {
  position: relative;
  margin: 10px 0 10px;
  padding-left: 13px;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.checklist__title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  bottom: 2px;
  width: 3px;
  border-radius: 3px;
  background: var(--cl-accent);
}

/* Style the markdown list the author writes inside the slot. */
/* Bullet lists (-): no marker. Ordered lists (1. 2. 3.): keep normal numbers. */
.checklist :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}
.checklist :deep(ul) > li::marker {
  content: none;
}
.checklist :deep(ol) {
  margin: 0;
  padding-left: 22px;
}
.checklist :deep(li) {
  margin: 0;
  padding: 11px 4px;
  line-height: 1.6;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: padding-left 0.18s cubic-bezier(0.2, 0, 0, 1);
}
.checklist :deep(li:hover) {
  padding-left: 10px;
}
.checklist :deep(li:last-child) {
  border-bottom: none;
}
</style>
