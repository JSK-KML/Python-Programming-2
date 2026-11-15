<template>
  <div class="ui-details">
    <Do>Fill in your details. The commands on this page use them.</Do>
    <div class="ui-details__form">
      <label for="ud-name">First name</label>
      <input id="ud-name" v-model="details.name" type="text" autocomplete="given-name" placeholder="Aiman" />
      <label for="ud-username">GitHub username</label>
      <input id="ud-username" v-model="details.username" type="text" autocomplete="username" spellcheck="false" placeholder="aiman-haris" />
      <label for="ud-email">GitHub email</label>
      <input id="ud-email" v-model="details.email" type="email" autocomplete="email" spellcheck="false" placeholder="aiman@example.com" />
    </div>
    <p class="ui-details__note">Saved in this browser only.</p>
  </div>
</template>

<script setup>
import Do from './Do.vue'
import { details } from './your-details.js'
</script>

<style scoped>
.ui-details { margin: 24px 0; }
.ui-details__form {
  display: grid;
  grid-template-columns: max-content minmax(0, 320px);
  align-items: center;
  gap: 10px 16px;
  margin-top: 12px;
}
.ui-details label { font-size: 14px; color: var(--vp-c-text-2); }
.ui-details input {
  width: 100%;
  padding: 6px 10px;
  font: inherit;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
}
.ui-details input::placeholder { color: var(--vp-c-text-3); }
.ui-details input:focus { outline: none; border-color: var(--vp-c-brand-1); }
.ui-details__note { margin: 10px 0 0; font-size: 13px; color: var(--vp-c-text-3); }
@media (max-width: 480px) {
  .ui-details__form { grid-template-columns: 1fr; gap: 4px; }
  .ui-details input { margin-bottom: 8px; }
}
</style>
