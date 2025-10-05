import { defineStore } from 'pinia'
import variables from '@/styles/sass/variables.module.scss'
import { ref } from 'vue'
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
  return { state }
})
