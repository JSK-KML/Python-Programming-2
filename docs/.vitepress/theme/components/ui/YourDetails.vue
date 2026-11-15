<template>
  <div class="ui-details">
    <div class="ui-details__head">
      <Icon name="user-pen" :size="16" />
      <span>Fill in your details</span>
    </div>
    <p class="ui-details__note">
      Every command on this page fills itself in, so you can copy it as it is.
      These stay in your browser only.
    </p>
    <div class="ui-details__grid">
      <label>
        <span>First name</span>
        <input v-model="details.name" type="text" autocomplete="given-name" placeholder="e.g. Aiman" />
      </label>
      <label>
        <span>GitHub username</span>
        <input v-model="details.username" type="text" autocomplete="username" spellcheck="false" placeholder="e.g. aiman-haris" />
      </label>
      <label>
        <span>GitHub email</span>
        <input v-model="details.email" type="email" autocomplete="email" spellcheck="false" placeholder="the email you log in with" />
      </label>
    </div>
    <p v-if="folder" class="ui-details__preview">Your course folder will be <code>{{ folder }}</code></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'
import { details, slugName } from './your-details.js'

const folder = computed(() => (slugName(details.name) ? `${slugName(details.name)}-CP125` : ''))
</script>

<style scoped>
.ui-details {
  margin: 24px 0;
  padding: 14px 16px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.ui-details__head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.ui-details__note { margin: 6px 0 12px; font-size: 14px; color: var(--vp-c-text-2); line-height: 1.5; }
.ui-details__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}
.ui-details label { display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 600; color: var(--vp-c-text-2); }
.ui-details input {
  padding: 8px 10px;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color 0.15s ease;
}
.ui-details input:focus { outline: none; border-color: var(--vp-c-brand-1); }
.ui-details__preview { margin: 12px 0 0; font-size: 14px; }
</style>
