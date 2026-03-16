import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Lara from '@primeuix/themes/lara'

export function setPrimeVue(app: App): void {
  app.use(PrimeVue, {
    theme: {
      preset: Lara,
    },
  })
  app.component('Button-Product', Button)
  app.component('Card', Card)
}
