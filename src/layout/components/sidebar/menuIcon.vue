<template>
  <div v-if="icon.includes('el-icon')">
    <!-- elementPlus 图标-->
    <el-icon>
      <component :is="iconComponent" />
    </el-icon>
  </div>
  <div v-else>
    <!-- 外部图标/内部图标 -->
    <el-icon>
      <SvgIcon :icon="icon" className="svg" />
    </el-icon>
  </div>
  <span>{{ title }}</span>
</template>

<script setup>
import SvgIcon from '@/libs/svg-icons/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const iconComponent = computed(() => {
  if (props.icon.startsWith('el-icon-')) {
    // 移除 el-icon- 前缀并转换为大驼峰命名
    const name = props.icon.substring(8)
    const componentName = name.replace(/(^\w|-\w)/g, (match) =>
      match.replace('-', '').toUpperCase()
    )
    // 返回对应的图标组件
    return ElementPlusIconsVue[componentName]
  }
  return props.icon
})
</script>

<style lang="scss" scoped></style>
