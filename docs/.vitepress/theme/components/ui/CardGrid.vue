<template>
  <div class="ui-card-grid" v-auto-animate><slot /></div>
</template>

<style scoped>
.ui-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
</style>
