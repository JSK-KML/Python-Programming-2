<template>
  <figure class="ui-figure">
    <div class="ui-figure__frame">
      <img :src="url" :alt="alt || caption" :class="{ 'is-loaded': loaded }" loading="lazy" @load="loaded = true" />
    </div>
    <figcaption v-if="caption || num" class="ui-figure__caption">
      <strong v-if="num">Figure {{ num }}.</strong> {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  src: { type: String, required: true },
  caption: { type: String, default: '' },
  alt: { type: String, default: '' },
  // Optional figure number, e.g. "1.2"
  num: { type: [String, Number], default: '' }
})

const url = computed(() => (/^(https?:)?\/\//.test(props.src) ? props.src : withBase(props.src)))
const loaded = ref(false)
// Images already cached may load before hydration; show them immediately.
onMounted(() => { if (!loaded.value) setTimeout(() => (loaded.value = true), 600) })
</script>

<style scoped>
.ui-figure { margin: 24px 0; }
.ui-figure__frame {
  display: flex;
  justify-content: center;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.ui-figure__frame img {
  max-height: 480px;
  border-radius: 6px;
  cursor: zoom-in;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.2, 0, 0, 1);
}
.ui-figure__frame img.is-loaded { opacity: 1; transform: none; }
.ui-figure__caption {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  color: var(--vp-c-text-2);
}
.ui-figure__caption strong { color: var(--vp-c-text-1); }
</style>
