<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar" class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg, width: commonStore.state.sidebarContainerWidth + ' !important' }" />
    <div class="main-container" :style="{ marginLeft: commonStore.state.sidebarContainerWidth }">
      <div class="fixed-header" :style="{ width: commonStore.state.mainContainerWidth }">
        <!-- 顶部的 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Sidebar from './components/sidebar/index.vue';
import AppMain from './components/appMain.vue';
import variables from '@/styles/sass/variables.module.scss';
import { useCommonStore } from '@/store/modules/useCommonStore'
const commonStore = useCommonStore()
const { sideBarWidth } = variables;

console.log('SCSS Variables:', variables)

console.log('Sidebar Width:', sideBarWidth);
</script>

<style lang="scss" scoped>
@use '@/styles/sass/variables.module.scss' as *;
@use '@/styles/sass/mixin.scss' as *;

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
