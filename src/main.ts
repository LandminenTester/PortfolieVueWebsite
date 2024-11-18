import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import intersectionObserver from './directives/intersection-observer'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('intersection-observer', intersectionObserver)

app.mount('#app')
