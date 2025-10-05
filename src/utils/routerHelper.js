/**
 * 1.筛选「有效路由」，排除无用路由
 * @param {} rawRoutes
 * @returns
 */
export const getOptimalRoute = (rawRoutes) => {
  // 原始路由数组（假设命名为 rawRoutes）
  // const rawRoutes = [/* 你的原始路由数据 */];

  // 1. 筛选有效路由：排除登录、404等非菜单路由，且必须有 meta.title（避免无标题菜单）
  const validRoutes = rawRoutes.filter((route) => {
    // 排除非菜单路由：path 为 /login、/404、/401 的路由
    const isInvalidPath = ['/login', '/404', '/401'].includes(route.path)
    // 必须有 meta.title（菜单需要显示标题）
    const hasTitle = route.meta && route.meta.title && route.meta.icon
    return !isInvalidPath && hasTitle
  })
  return validRoutes
}

/**
 * 步骤 2：提取「一级菜单路由」（父路由）
 * 规则：有 redirect + 有 children 的是父路由；/profile 是独立一级路由
 *
 * @param {*} validRoutes
 * @returns
 */
export const getMenuList = (validRoutes) => {
  // 先筛选出符合条件的父路由
  const parentRoutes = validRoutes.filter((route) => {
    const isParentWithRedirect =
      route.redirect && Array.isArray(route.children) && route.children.length > 0
    const isIndependentParent = route.path === '/profile'
    return isParentWithRedirect || isIndependentParent
  })

  // 对每个父路由的children进行同样的有效性过滤
  return parentRoutes.map((route) => {
    // 如果有子路由，递归过滤子路由
    if (route.children && route.children.length > 0) {
      return {
        ...route,
        // 递归应用有效路由过滤规则到子路由
        children: getOptimalRoute(route.children)
      }
    }
    return route
  })
}
