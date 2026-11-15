// Lets the editor's TypeScript resolve `import X from './X.vue'` in theme/index.ts.
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
