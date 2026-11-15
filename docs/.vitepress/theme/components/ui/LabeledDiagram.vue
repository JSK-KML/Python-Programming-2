<template>
  <div class="ui-ld">
    <div class="ui-ld__stage">
      <img :src="url" :alt="alt" class="ui-ld__img" />
      <button
        v-for="(l, i) in labels"
        :key="i"
        class="ui-ld__pin"
        :class="{ 'is-active': active === i }"
        :style="{ left: l.x + '%', top: l.y + '%' }"
        :aria-label="l.label"
        :aria-pressed="active === i"
        @click="toggle(i)"
        @mouseenter="hover = i"
        @mouseleave="hover = null"
      >{{ i + 1 }}</button>
      <Transition name="ui-ld-tag">
        <span
          v-if="shown !== null"
          :key="shown"
          class="ui-ld__tag"
          :style="{ left: labels[shown].x + '%', top: labels[shown].y + '%' }"
        >{{ labels[shown].label }}</span>
      </Transition>
    </div>

    <ol class="ui-ld__legend">
      <li v-for="(l, i) in labels" :key="i">
        <button class="ui-ld__item" :class="{ 'is-active': active === i }" @click="toggle(i)">
          <span class="ui-ld__num">{{ i + 1 }}</span>
          <span class="ui-ld__name">{{ l.label }}</span>
        </button>
        <div class="ui-ld__desc-wrap" :class="{ 'is-open': active === i && l.text }">
          <p class="ui-ld__desc">{{ l.text }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Labeled diagram' },
  // [{ x: 40, y: 55, label: 'Nucleus', text: 'Optional description' }, ...]
  // x / y are percentages of the image width / height.
  labels: { type: Array, required: true }
})

const url = computed(() => (/^(https?:)?\/\//.test(props.src) ? props.src : withBase(props.src)))
const active = ref(null)
const hover = ref(null)
const shown = computed(() => (hover.value !== null ? hover.value : active.value))

function toggle(i) {
  active.value = active.value === i ? null : i
}
</script>

<style scoped>
.ui-ld {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 20px;
  margin: 24px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
@media (max-width: 640px) { .ui-ld { grid-template-columns: 1fr; } }

.ui-ld__stage { position: relative; align-self: start; }
.ui-ld__img { display: block; width: 100%; border-radius: 8px; }

.ui-ld__pin {
  position: absolute;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin: -12px 0 0 -12px;
  padding: 0;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), background-color 0.15s ease, color 0.15s ease;
}
.ui-ld__pin:hover { transform: scale(1.15); }
.ui-ld__pin.is-active { color: #fff; background: var(--vp-c-brand-1); transform: scale(1.15); }
.ui-ld__pin:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }

.ui-ld__tag {
  position: absolute;
  z-index: 2;
  padding: 3px 9px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  transform: translate(-50%, calc(-100% - 18px));
  pointer-events: none;
}
.ui-ld-tag-enter-active, .ui-ld-tag-leave-active { transition: opacity 0.15s ease; }
.ui-ld-tag-enter-from, .ui-ld-tag-leave-to { opacity: 0; }

.vp-doc .ui-ld__legend, .ui-ld__legend { margin: 0; padding: 0; list-style: none; }
.vp-doc .ui-ld__legend li { margin: 0; }
.ui-ld__legend li + li { border-top: 1px solid var(--vp-c-divider); }

.ui-ld__item {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  font: inherit;
  font-size: 14px;
  text-align: left;
  color: var(--vp-c-text-1);
  background: none;
  border: none;
  cursor: pointer;
}
.ui-ld__num {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  border: 1.5px solid var(--vp-c-brand-1);
  border-radius: 50%;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.ui-ld__item:hover .ui-ld__name { color: var(--vp-c-brand-1); }
.ui-ld__item.is-active .ui-ld__num { color: #fff; background: var(--vp-c-brand-1); }
.ui-ld__item.is-active .ui-ld__name { color: var(--vp-c-brand-1); font-weight: 600; }
.ui-ld__name { transition: color 0.15s ease; }

/* Smooth height reveal using grid rows */
.ui-ld__desc-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.2, 0, 0, 1);
}
.ui-ld__desc-wrap.is-open { grid-template-rows: 1fr; }
.vp-doc .ui-ld__desc, .ui-ld__desc {
  overflow: hidden;
  margin: 0;
  padding: 0 4px 0 36px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
.ui-ld__desc-wrap.is-open .ui-ld__desc { padding-bottom: 10px; }
</style>
