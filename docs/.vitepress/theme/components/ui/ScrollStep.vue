<template>
  <div class="ui-scroll-step"><slot /></div>
</template>

<script setup>
// One step inside <ScrollTimeline>. `title` and `date` appear in the step list.
defineProps({
  title: { type: String, required: true },
  date: { type: String, default: '' }
})
</script>
