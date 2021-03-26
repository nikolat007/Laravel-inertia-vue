require('bootstrap');


import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Toaster from 'v-toaster'
 
import 'v-toaster/dist/v-toaster.css'
 
Vue.use(Toaster, {timeout: 5000})

Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(el)
