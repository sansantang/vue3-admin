import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/sass/index.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupSvgIcon } from '@/assets/icons'
import 'virtual:svg-icons-register' // 引入SVG注册脚本
import '@/api/mock' //mock.js
import '@/utils/permisson' //全局路由守卫
const app = createApp(App)

setupSvgIcon(app)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
