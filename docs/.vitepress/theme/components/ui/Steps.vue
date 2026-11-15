<template>
  <div ref="root" class="ui-steps"><slot /></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Wraps a markdown ordered list and turns it into a numbered procedure.
// Steps fade in one by one as they scroll into view.
const root = ref(null)
let io = null

onMounted(() => {
  const items = root.value?.querySelectorAll(':scope > ol > li') || []
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  )
  items.forEach((li) => {
    li.classList.add('will-animate')
    io.observe(li)
  })
})
onBeforeUnmount(() => io?.disconnect())
</script>

<style scoped>
.ui-steps { margin: 24px 0; }
.ui-steps :deep(> ol) {
  counter-reset: step;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ui-steps :deep(> ol > li) {
  counter-increment: step;
  position: relative;
  margin: 0;
  padding: 0 0 22px 46px;
}
.ui-steps :deep(> ol > li:last-child) { padding-bottom: 0; }
/* number bubble */
.ui-steps :deep(> ol > li)::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
}
/* connecting line */
.ui-steps :deep(> ol > li:not(:last-child))::after {
  content: '';
  position: absolute;
  left: 15px;
  top: 34px;
  bottom: 4px;
  width: 2px;
  background: var(--vp-c-divider);
}
.ui-steps :deep(> ol > li > p:first-child) { margin-top: 3px; }
.ui-steps :deep(> ol > li > :first-child) { font-weight: 600; }

.ui-steps :deep(> ol > li.will-animate) {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.2, 0, 0, 1);
}
.ui-steps :deep(> ol > li.will-animate.is-in) { opacity: 1; transform: none; }
</style>
