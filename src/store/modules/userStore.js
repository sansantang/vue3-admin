import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import md5 from 'md5'
import { login, profile } from '@/api/sys'
import { setItem, getItem, removeItem, clearItem } from '@/utils/localstorage'
import { TOKEN } from '@/constant'
import router from '@/router'

export const useUserStore = defineStore('userStore', () => {
  const state = ref({
    token: getItem(TOKEN) || '',
    userInfo: ref({}),
    hasUserInfo: false
  })

  function setToken(token) {
    state.value.token = token //存储到 pinia
    setItem(TOKEN, token) //存储到 localstorage
  }

  function uselogin(context, userinfo) {
    const { username, password } = userinfo

    return new Promise((resolve, reject) => {
      login({ username, password: md5(password) })
        .then((res) => {
          setToken(res.token)
          resolve(res)
        })
        .then(() => {
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  //#region 监听userInfo变化，如果userInfo为空，则hasUserInfo为false，否则为true
  watch(
    () => state.value.userInfo,
    () => {
      if (!state.value.userInfo) {
        state.value.hasUserInfo = false
      } else {
        state.value.hasUserInfo =
          Object.keys(state.value.userInfo).length > 0 &&
          JSON.stringify(state.value.userInfo) !== '{}'
      }
      return state.value.hasUserInfo
    }
  )

  async function getUserInfo() {
    const res = await profile()
    state.value.userInfo = res
    return res
  }
  //#endregion

  function logout() {
    state.value.token = ''
    state.value.userInfo = {}
    state.value.hasUserInfo = false
    // clearItem()
    removeItem('token')
    // todo 退出登录，清理权限配置
    router.push('/login')
  }

  return { state, uselogin, logout, getUserInfo }
})
