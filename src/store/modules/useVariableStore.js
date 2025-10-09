import { defineStore } from 'pinia'
import variables from '@/styles/sass/variables.module.scss'
import { ref } from 'vue'
import { getItem } from '@/utils/localstorage'
import { DEFAULT_COLOR } from '@/constant'

export const useVarCssStore = defineStore('varCssStore', () => {
  const state = ref({
    menuText: variables.menuText,
    menuActiveText: variables.menuActiveText,
    subMenuActiveText: variables.subMenuActiveText,
    menuBg: variables.menuBg,
    menuHover: variables.menuHover,
    subMenuBg: variables.subMenuBg,
    subMenuHover: variables.subMenuHover,
    sideBarWidth: variables.sideBarWidth,
    hiddenSideBarWidth: variables.hiddenSideBarWidth
  })

  function setThemeColor(theme) {
    if (getItem('THEME_COLOR') === DEFAULT_COLOR) {
      state.value.menuText = variables.menuText
      state.value.menuActiveText = variables.menuActiveText
      state.value.subMenuActiveText = variables.subMenuActiveText
      state.value.menuBg = variables.menuBg
      state.value.menuHover = variables.menuHover
      state.value.subMenuBg = variables.subMenuBg
      state.value.subMenuHover = variables.subMenuHover
      state.value.sideBarWidth = variables.sideBarWidth
      state.value.hiddenSideBarWidth = variables.hiddenSideBarWidth
    } else {
      state.value.menuBg = theme
    }
  }
  return { state, setThemeColor }
})
