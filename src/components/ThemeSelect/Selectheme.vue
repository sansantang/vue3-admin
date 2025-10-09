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
import { onMounted, ref } from 'vue'
import { useThemeStore } from '@/store/modules/themeStore'
import { useVarCssStore } from '@/store/modules/useVariableStore'
import { DEFAULT_COLOR } from '@/constant/index'


const currentTheme = ref(DEFAULT_COLOR)
const themeSotre = useThemeStore();
const varCssStore = useVarCssStore();

onMounted(() => {
  const theme = themeSotre.state.themeColor;
  switch (theme) {
    case '#409eff':
      currentTheme.value = DEFAULT_COLOR;
      break;
    case '#B2203F':
      currentTheme.value = '#B2203F';
      break;
    case 'red':
      currentTheme.value = 'red';
      break;
  }
})


// 切换主题
const changeTheme = (theme) => {
  themeSotre.setThemeColor(theme);
  varCssStore.setThemeColor(theme);
}
</script>

<style lang="scss" scoped>
.select-popper {
  min-width: 110px;
  padding-right: 10px;
  /* 根据需求调整 */
}
</style>
