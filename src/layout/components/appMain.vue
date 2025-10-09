<template>
  <div class="app-main-header">
    <CommonTag></CommonTag>
  </div>
  <div class="app-main">

    <!-- <RouterView> </RouterView> -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import CommonTag from './tags/index.vue'


</script>

<style lang="scss" scoped>
.app-main-header {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 0px 20px;
  box-sizing: border-box;
}

.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 21px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
