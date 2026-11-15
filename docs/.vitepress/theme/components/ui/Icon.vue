<template>
  <span class="ui-icon" :style="{ width: size + 'px', height: size + 'px' }" aria-hidden="true" v-html="svg"></span>
</template>

<script setup>
import { computed } from 'vue'
import {
  BookOpen, GraduationCap, FlaskConical, FileCheck, Calendar, ClipboardList,
  Microscope, Dna, Leaf, Atom, Brain, HeartPulse, Sprout, Bug, Clock, Target,
  Trophy, Users, Layers, Lightbulb, FileText, ListChecks, Sparkle, Droplets, Sun, Zap,
  SquareTerminal, MousePointerClick, CircleCheck, UserPen, CircleChevronRight
} from 'lucide-static'

// Curated icon set (Lucide). Use by name: <Icon name="dna" />
const icons = {
  'book-open': BookOpen, 'graduation-cap': GraduationCap, 'flask-conical': FlaskConical,
  'file-check': FileCheck, calendar: Calendar, 'clipboard-list': ClipboardList,
  microscope: Microscope, dna: Dna, leaf: Leaf, atom: Atom, brain: Brain,
  'heart-pulse': HeartPulse, sprout: Sprout, bug: Bug, clock: Clock, target: Target,
  trophy: Trophy, users: Users, layers: Layers, lightbulb: Lightbulb,
  'file-text': FileText, 'list-checks': ListChecks, sparkle: Sparkle,
  droplets: Droplets, sun: Sun, zap: Zap,
  terminal: SquareTerminal, 'mouse-pointer-click': MousePointerClick, 'circle-check': CircleCheck, 'user-pen': UserPen,
  'circle-chevron-right': CircleChevronRight
}

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 20 }
})

const svg = computed(() =>
  (icons[props.name] || icons['file-text'])
    .replace(/width="24"/, 'width="100%"')
    .replace(/height="24"/, 'height="100%"')
)
</script>

<style scoped>
.ui-icon { display: inline-flex; flex-shrink: 0; }
.ui-icon :deep(svg) { display: block; }
</style>
