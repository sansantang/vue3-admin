<template>
  <div class="navbar">
    <div class="left-menu">
      <div class="hamburger" @click="toggleSidebar">
        <SvgIcon icon="hamburger-opened" class="hamburger-icon" v-show="commonStore.state.isOpenMenu" />
        <SvgIcon icon="hamburger-closed" class="hamburger-icon" v-show="!commonStore.state.isOpenMenu" />
      </div>
      <div class="breadcrumb-container">
        <Breadcrumb></Breadcrumb>
      </div>

    </div>
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="store.state.userInfo.avatar" />
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store'
import { useCommonStore } from '@/store/modules/useCommonStore'
import Breadcrumb from '@/layout/components/breadcrumb/index.vue'
const commonStore = useCommonStore()
const store = useUserStore()
function logout() {
  store.logout()
}

function toggleSidebar() {
  commonStore.OpenOrCloseMenu()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .avatar-container {
      cursor: pointer;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }

  .left-menu {
    display: inline-flex;
    line-height: 50px;
    align-items: center;

    .hamburger {
      width: 50px;
      padding: 0px 12px;
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, .1);
      }

      .hamburger-icon {
        width: 20px;
        height: 20px;
      }
    }

    .breadcrumb-container {
      height: 50px;
      padding-top: 14px;
    }

  }
}
</style>
