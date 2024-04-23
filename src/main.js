// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import Vue Router instance

createApp(App)
  .use(router) // Use Vue Router instance
  .mount('#app')
