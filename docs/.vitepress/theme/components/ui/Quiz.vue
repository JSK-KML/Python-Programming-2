<template>
  <div class="ui-quiz" :class="{ 'ui-quiz--done': picked !== null }">
    <div class="ui-quiz__head">
      <span class="ui-quiz__label">Quick check</span>
      <button v-if="picked !== null" class="ui-quiz__retry" @click="picked = null">Try again</button>
    </div>
    <p class="ui-quiz__q">{{ question }}</p>
    <ul class="ui-quiz__options" role="list">
      <li v-for="(opt, i) in options" :key="i">
        <button
          class="ui-quiz__opt"
          :class="stateOf(i)"
          :disabled="picked !== null"
          :aria-pressed="picked === i"
          @click="picked = i"
        >
          <span class="ui-quiz__letter">{{ letters[i] }}</span>
          <span class="ui-quiz__text">{{ opt }}</span>
          <svg v-if="stateOf(i) === 'is-correct'" class="ui-quiz__mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12 5 5L20 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg v-else-if="stateOf(i) === 'is-wrong'" class="ui-quiz__mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" />
          </svg>
        </button>
      </li>
    </ul>
    <Transition name="ui-quiz-fb">
      <div v-if="picked !== null" class="ui-quiz__feedback" :class="picked === answer ? 'good' : 'bad'" role="status">
        <strong>{{ picked === answer ? 'Correct!' : `Not quite — the answer is ${letters[answer]}.` }}</strong>
        <span v-if="explain" class="ui-quiz__explain">{{ explain }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: String, required: true },
  options: { type: Array, required: true },
  // Index (0-based) of the correct option.
  answer: { type: Number, required: true },
  // Optional explanation shown after answering.
  explain: { type: String, default: '' }
})

const letters = 'ABCDEFGH'
const picked = ref(null)

function stateOf(i) {
  if (picked.value === null) return ''
  if (i === props.answer) return 'is-correct'
  if (i === picked.value) return 'is-wrong'
  return 'is-faded'
}
</script>

<style scoped>
.ui-quiz {
  margin: 24px 0;
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.ui-quiz__head { display: flex; align-items: center; justify-content: space-between; }
.ui-quiz__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.ui-quiz__retry {
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: none;
  border: none;
  cursor: pointer;
  animation: ui-fade 0.2s ease;
}
.ui-quiz__retry:hover { color: var(--vp-c-brand-1); }
.vp-doc .ui-quiz__q, .ui-quiz__q { margin: 6px 0 14px; font-weight: 700; color: var(--vp-c-text-1); }

.vp-doc .ui-quiz__options, .ui-quiz__options {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.vp-doc .ui-quiz__options li { margin: 0; }

.ui-quiz__opt {
  --o: var(--vp-c-divider);
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font: inherit;
  font-size: 14px;
  text-align: left;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--o);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
}
.ui-quiz__opt:not(:disabled):hover { border-color: var(--vp-c-brand-1); }
.ui-quiz__opt:not(:disabled):active { transform: scale(0.99); }
.ui-quiz__opt:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.ui-quiz__opt:disabled { cursor: default; }

.ui-quiz__letter {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 7px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s ease;
}
.ui-quiz__text { flex: 1; }
.ui-quiz__mark { width: 18px; height: 18px; animation: ui-pop 0.25s cubic-bezier(0.2, 0, 0, 1); }

.ui-quiz__opt.is-correct { --o: #2f8f5b; background: color-mix(in srgb, #2f8f5b 10%, var(--vp-c-bg)); color: var(--vp-c-text-1); }
.ui-quiz__opt.is-correct .ui-quiz__letter { color: #fff; background: #2f8f5b; border-color: #2f8f5b; }
.ui-quiz__opt.is-correct .ui-quiz__mark { color: #2f8f5b; }
.ui-quiz__opt.is-wrong { --o: #c2410c; background: color-mix(in srgb, #c2410c 8%, var(--vp-c-bg)); }
.ui-quiz__opt.is-wrong .ui-quiz__letter { color: #fff; background: #c2410c; border-color: #c2410c; }
.ui-quiz__opt.is-wrong .ui-quiz__mark { color: #c2410c; }
.ui-quiz__opt.is-faded { opacity: 0.5; }

.ui-quiz__feedback {
  margin-top: 12px;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 1.6;
  border-radius: 10px;
  border: 1px solid;
}
.ui-quiz__explain { margin-left: 0.35em; }
.ui-quiz__feedback.good { border-color: #2f8f5b; background: color-mix(in srgb, #2f8f5b 8%, transparent); }
.ui-quiz__feedback.bad { border-color: #c2410c; background: color-mix(in srgb, #c2410c 7%, transparent); }

.ui-quiz-fb-enter-active { transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.2, 0, 0, 1); }
.ui-quiz-fb-enter-from { opacity: 0; transform: translateY(-4px); }

@keyframes ui-pop { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: none; } }
@keyframes ui-fade { from { opacity: 0; } to { opacity: 1; } }
</style>
