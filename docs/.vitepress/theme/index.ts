// docs/.vitepress/theme/index.ts
/// <reference path="../shims-vue.d.ts" />
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './style.css'

// Components ported from bio-matrikulasi. See /reference for how to use each one.
import Checklist from './components/Checklist.vue'
import Accordion from './components/ui/Accordion.vue'
import AccordionItem from './components/ui/AccordionItem.vue'
import Tabs from './components/ui/Tabs.vue'
import Tab from './components/ui/Tab.vue'
import Term from './components/ui/Term.vue'
import UiBadge from './components/ui/Badge.vue'
import CardGrid from './components/ui/CardGrid.vue'
import LinkCard from './components/ui/LinkCard.vue'
import Timeline from './components/ui/Timeline.vue'
import TimelineItem from './components/ui/TimelineItem.vue'
import Quiz from './components/ui/Quiz.vue'
import Flashcards from './components/ui/Flashcards.vue'
import Steps from './components/ui/Steps.vue'
import Figure from './components/ui/Figure.vue'
import LabeledDiagram from './components/ui/LabeledDiagram.vue'
import ScrollTimeline from './components/ui/ScrollTimeline.vue'
import ScrollStep from './components/ui/ScrollStep.vue'
import Icon from './components/ui/Icon.vue'
import StatGrid from './components/ui/StatGrid.vue'
import StatCard from './components/ui/StatCard.vue'
import InfoCard from './components/ui/InfoCard.vue'
import Action from './components/ui/Action.vue'
import Check from './components/ui/Check.vue'
import YourDetails from './components/ui/YourDetails.vue'
import Do from './components/ui/Do.vue'
import FunctionParts from './components/ui/FunctionParts.vue'
import { loadDetails, fillPage } from './components/ui/your-details.js'
import { markTerminalBlocks } from './terminal.js'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // v-motion (Checklist, TimelineItem) and v-auto-animate (CardGrid).
    app.use(MotionPlugin)
    app.use(autoAnimatePlugin)
    // The coloured pill badge is registered as UiBadge so VitePress's own
    // <Badge type="warning" text="Task" /> used in the labs keeps working.
    const ui = {
      Checklist, Accordion, AccordionItem, Tabs, Tab, Term, UiBadge, CardGrid, LinkCard,
      Timeline, TimelineItem, Quiz, Flashcards, Steps, Figure, LabeledDiagram,
      ScrollTimeline, ScrollStep, Icon, StatGrid, StatCard, InfoCard,
      // Lab layout: <Action> = an instruction, <Check> = expected result,
      // <YourDetails> = fills YOURNAME / GITHUB-USERNAME / GITHUB-EMAIL in the page.
      Action, Check, YourDetails,
      // <Do>…</Do> = an instruction line (brand colour, semi-bold, no box).
      Do,
      // Lab figures drawn inline so they follow the site's fonts and light/dark colours.
      FunctionParts
    }
    for (const [name, comp] of Object.entries(ui)) app.component(name, comp)
  },
  setup() {
    const route = useRoute()
    // Click-to-zoom only for <Figure> images, so other page images are unchanged.
    const initZoom = () => mediumZoom('.vp-doc .ui-figure img', { background: 'var(--vp-c-bg)' })
    onMounted(() => {
      initZoom()
      markTerminalBlocks()
      loadDetails()
      fillPage()
    })
    watch(() => route.path, () => nextTick(() => {
      initZoom()
      markTerminalBlocks()
      fillPage()
    }))
  }
}
