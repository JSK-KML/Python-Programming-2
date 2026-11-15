<template>
  <div class="ui-stat-grid"><slot /></div>
</template>

<style scoped>
.ui-stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 14px;
  margin: 24px 0;
}
</style>
