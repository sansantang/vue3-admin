<template>
  <el-menu :uniqueOpened="true" :default-active="activeMenu" :background-color="store.state.menuBg"
    :text-color="store.state.menuText" :active-text-color="store.state.menuActiveText"
    :collapse="!commonStore.state.isOpenMenu" router>
    <!-- 包含子集 menu 菜单 -->
    <template v-for="item in menuList" :key="item.path">
      <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
        <template #title>
          <MenuIcon :icon="item.meta.icon" :title="generateRouteTitle(item.meta.title)" />
        </template>
        <el-menu-item v-for="children in item.children" :key="children.path" :index="children.path"
          @click="handleGoRouter(children)">
          <MenuIcon :icon="children.meta.icon" :title="generateRouteTitle(children.meta.title)" />
        </el-menu-item>
      </el-sub-menu>
      <!-- 一级 menu 菜单 -->
      <el-menu-item v-else :index="item.path" @click="handleGoRouter(item)">
        <MenuIcon :icon="item.meta.icon" :title="generateRouteTitle(item.meta.title)" />
      </el-menu-item>
    </template>
  </el-menu>

</template>
<script setup>
// import router from '@/router';
import { getOptimalRoute, getMenuList } from '@/utils/routerHelper'
import { useRouter } from 'vue-router'
import MenuIcon from './menuIcon.vue'
import { useVarCssStore } from '@/store/modules/useVariableStore'
import { computed } from 'vue'
import { useCommonStore } from '@/store/modules/useCommonStore'
import { useTagsStore } from '@/store/modules/useTagsStore'

import { generateRouteTitle } from '@/utils/i18n'
const commonStore = useCommonStore()
const store = useVarCssStore()
const tagsStore = useTagsStore()

const router = useRouter()
const routes = router.getRoutes()
// console.log(routes)
const optimalRoutes = getOptimalRoute(routes)
// console.log('optimalRoutes', optimalRoutes)
const menuList = getMenuList(optimalRoutes)
// console.log('getMenu', menuList)

/**
 * 获取当前激活的菜单
 */
const activeMenu = computed(() => {
  const { path } = router.currentRoute.value
  return path
})

const handleGoRouter = (item) => {
  router.push(item.path)
  tagsStore.selectMenuTotags(item);
}
</script>
<style lang="scss" scoped>
.subMenuIconItem {
  display: flex;
}
</style>
