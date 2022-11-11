import { createApp } from 'vue'
import { router } from '@/routers'
import './style.css'
import 'normalize.css'
import App from './App.vue'

// https://juejin.cn/post/7144929568132956174

createApp(App).use(router).mount('#app')
