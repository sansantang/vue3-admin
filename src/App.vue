<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/store/modules/themeStore'


const themeSotre = useThemeStore();


// 初始化主题
onMounted(() => {
  themeSotre.setThemeColor(themeSotre.state.themeColor);
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
