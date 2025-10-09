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
      <!-- 主题切换 -->
      <Selectheme></Selectheme>
      <!-- 国际化 切换语言 -->
      <el-dropdown trigger="click" class="international" @command="toggleLanguage">
        <div>
          <el-tooltip content="国际化">
            <SvgIcon icon="language" class="language-icon" />
          </el-tooltip>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :disabled="commonStore.state.language === 'zh'" command="zh">
              中文
            </el-dropdown-item>
            <el-dropdown-item :disabled="commonStore.state.language === 'en'" command="en">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="store.state.userInfo.avatar" />
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{ $t('msg.navBar.course') }} </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}
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
import { ElMessage } from 'element-plus'
import SvgIcon from '@/libs/svg-icons/index.vue'
import { useI18n } from 'vue-i18n'
import Selectheme from '@/components/ThemeSelect/Selectheme.vue'

const commonStore = useCommonStore()
const store = useUserStore()
const i18n = useI18n()

function logout() {
  store.logout()
}

function toggleSidebar() {
  commonStore.OpenOrCloseMenu()
}

// 切换语言的方法
function toggleLanguage(lang) {
  i18n.locale.value = lang
  commonStore.toggleLanguage(lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
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

    .language-icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      cursor: pointer;
    }

    :deep(.avatar-container) {
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
