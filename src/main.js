import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/sass/index.scss'
import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupSvgIcon } from '@/assets/icons'
import 'virtual:svg-icons-register' // 引入SVG注册脚本
import '@/api/mock' //mock.js
import '@/utils/permisson' //全局路由守卫
import i18n from '@/i18n'
import elementPlusLocales from '@/plugins/elementPlus'

const app = createApp(App)

setupSvgIcon(app)
app.use(createPinia())
app.use(router)
// app.use(ElementPlus)
app.use(i18n) //i18n 语言包使用
elementPlusLocales(app) //element-plus 语言包使用
app.mount('#app')
