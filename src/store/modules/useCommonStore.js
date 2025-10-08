import { defineStore } from 'pinia'
import { useVarCssStore } from '@/store/modules/useVariableStore'
import { computed, ref } from 'vue'
import { getItem, setItem } from '@/utils/localstorage'

export const useCommonStore = defineStore('commonStore', () => {
  const store = useVarCssStore()
  const { sideBarWidth, hiddenSideBarWidth } = store.state
  const state = ref({
    /**
     * 侧边栏是否展开
     */
    isOpenMenu: true,
    /**
     * 侧边栏容器宽度，根据isOpenMenu的值来决定
     */
    sidebarContainerWidth: computed(() =>
      state.value.isOpenMenu ? sideBarWidth : hiddenSideBarWidth
    ),
    /**
     * 主要内容容器宽度，根据isOpenMenu的值来决定
     */
    mainContainerWidth: computed(() => `calc(100% - ${state.value.sidebarContainerWidth})`),
    language: getItem('language') || 'zh'
  })
  /**
   * 侧边栏展开和关闭
   */
  function OpenOrCloseMenu() {
    state.value.isOpenMenu = !state.value.isOpenMenu
  }

  /**
   * 切换语言
   * @param {*} lang
   */
  function toggleLanguage(lang) {
    const newLanguage = lang
    setItem('language', newLanguage)
    state.value.language = newLanguage
  }

  return { state, OpenOrCloseMenu, toggleLanguage }
})
