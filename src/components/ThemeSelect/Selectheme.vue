<template>
  <el-button type="primary">Primary</el-button>
  <el-select v-model="currentTheme" @change="changeTheme" placeholder="Select" class="select-popper">
    <el-option label="默认主题" value="#409eff"></el-option>
    <el-option label="深色主题" value="#B2203F"></el-option>
    <el-option label="红色主题" value="red"></el-option>
  </el-select>
  <div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/store/modules/themeStore'
import { DEFAULT_COLOR } from '@/constant/index'


const currentTheme = ref(DEFAULT_COLOR)
const themeSotre = useThemeStore();

// 切换主题
const changeTheme = (theme) => {
  themeSotre.setThemeColor(theme);
}
</script>

<style lang="scss" scoped>
.select-popper {
  min-width: 110px;
  padding-right: 10px;
  /* 根据需求调整 */
}
</style>
