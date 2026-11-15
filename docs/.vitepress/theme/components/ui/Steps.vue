<template>
  <!-- Wraps a markdown ordered list and turns it into a numbered procedure.
       Static: steps are always visible, no scroll-in animation. -->
  <div class="ui-steps"><slot /></div>
</template>

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
</style>
