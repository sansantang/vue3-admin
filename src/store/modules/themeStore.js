import { defineStore } from 'pinia'
import { DEFAULT_COLOR } from '@/constant'
import { ref } from 'vue'
import { getItem, setItem } from '@/utils/localstorage'

export const useThemeStore = defineStore('themeStore', () => {
  const state = ref({
    themeColor: getItem('THEME_COLOR') || DEFAULT_COLOR
  })

  /**
   * 设置主题颜色
   * @param {*} color
   */
  function setThemeColor(color) {
    document.documentElement.style.setProperty('--el-color-primary', color) //html 设置主题颜色
    // const style = document.createElement('style')
    // style.innerHTML = `:root {
    //   --el-color-primary: ${color};
    // }`
    // document.head.appendChild(style)

    state.value.themeColor = color //pinia 设置主题颜色
    setItem('THEME_COLOR', color) //localStorage 设置主题颜色
  }

  return { state, setThemeColor }
})
