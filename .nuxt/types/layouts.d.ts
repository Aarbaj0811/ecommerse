import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "sidebar"
declare module "/var/www/html/nuxt/nuxt_app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}