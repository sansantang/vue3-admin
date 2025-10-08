import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useCommonStore } from '@/store/modules/useCommonStore'

export default (app) => {
  const { state } = useCommonStore()
  const locale = state.language === 'zh' ? zhCn : en
  app.use(ElementPlus, {
    locale: locale
  })
}
