import component from './v-scrollin.vue'

// Install Vue component
export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VScrollin', component)
}

// Auto-install if Vue is found
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use({ install })
}

// Allow import as module
export default component
