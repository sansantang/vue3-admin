import { createI18n } from 'vue-i18n'
import localen from './lang/en'
import localzh from './lang/zh'

const messages = {
  en: {
    msg: {
      ...localen
    }
  },
  zh: {
    msg: {
      ...localzh
    }
  }
}

// 创建 i18n 实例时使用默认语言
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: 'zh', // 默认使用中文
  messages
})

// 导出一个函数，用于在 Pinia 初始化后更新语言设置
export async function updateI18nLanguage() {
  try {
    // 动态导入 store，避免在 i18n 初始化时就加载
    // 使用 ES 模块的动态导入语法代替 require
    const { useCommonStore } = await import('@/store/modules/useCommonStore')
    const store = useCommonStore()
    if (store?.state?.language) {
      i18n.global.locale.value = store.state.language
    }
  } catch (error) {
    console.error('更新语言设置失败:', error)
  }
}

export default i18n
