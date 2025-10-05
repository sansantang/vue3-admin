import router from '../router/index'
// import { getItem } from '../utils/storege'
import { useUserStore } from '@/store'

router.beforeEach(async (to, from, next) => {
  // console.log(router.getRoutes())
  const store = useUserStore()
  const token = store.state.token

  // 如果访问的不是登录页且没有token，则重定向到登录页
  if (to.path !== '/login' && !token) {
    next({
      path: '/login'
    })
    return
  }

  //获取用户信息
  if (to.path !== '/login' && token) {
    if (!store.state.hasUserInfo) {
      await store.getUserInfo()
    }
  }

  // 如果已经登录了还要访问登录页，则重定向到首页
  // if (to.path === '/login' && token) {
  //   next({
  //     path: '/home'
  //   })
  //   return
  // }

  // 其他情况正常放行
  next()
})
