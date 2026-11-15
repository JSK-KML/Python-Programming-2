<template>
  <div class="ui-tab"><slot /></div>
</template>

<script setup>
// A single panel inside <Tabs>. The `label` becomes the tab button text.
defineProps({
  label: { type: String, required: true }
})
</script>
