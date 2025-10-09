<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/store/modules/themeStore'
import { useVarCssStore } from '@/store/modules/useVariableStore'

const themeSotre = useThemeStore();
const varCssStore = useVarCssStore();

// 初始化主题
onMounted(() => {
  themeSotre.setThemeColor(themeSotre.state.themeColor);
  varCssStore.setThemeColor(themeSotre.state.themeColor);
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
