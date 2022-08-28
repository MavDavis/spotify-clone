import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import createStore from "./store"
createApp(App).use(router).use(createStore).mount('#app')
