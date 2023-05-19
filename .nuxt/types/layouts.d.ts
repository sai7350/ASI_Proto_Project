import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custome" | "default"
declare module "H:/Saapttrini Software Solution/Test_Project/SampleCode/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}