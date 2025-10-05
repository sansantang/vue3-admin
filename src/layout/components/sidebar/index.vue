<template>
  <div>
    <div class="logo">
      <div class="avatar-wrapper">
        <el-avatar shape="square" :size="commonStore.state.isOpenMenu ? 40 : 24"
          :src="userStore.state.userInfo.avatar" />
      </div>
      <span class="title" v-show="commonStore.state.isOpenMenu">后台管理系统</span>
    </div>
    <!-- Menu 菜单-->
    <el-scrollbar>
      <Menu></Menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Menu from './menu.vue'
import { useUserStore } from '@/store'
import { useCommonStore } from '@/store/modules/useCommonStore'
const userStore = useUserStore()
const commonStore = useCommonStore()
</script>

<style lang="scss" scoped>
.logo {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  .title {
    color: #fff;
    font-weight: 600;
  }
}
</style>
