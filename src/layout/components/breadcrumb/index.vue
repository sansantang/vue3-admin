<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in matched" :key="item.path"
      :to="index === matched.length - 1 ? undefined : { path: item.path }">
      <span :style="{ color: index === matched.length - 1 ? '#97a8be' : 'black' }">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// 计算面包屑数据
const matched = computed(() => {
  // 过滤掉没有标题的路由，并排除根路径
  return route.matched.filter(item => {
    return item.meta && item.meta.title;
  });
});
</script>

<style lang="scss" scoped></style>
