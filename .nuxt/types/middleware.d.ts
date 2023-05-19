import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "H:/Saapttrini Software Solution/Test_Project/SampleCode/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}