<template>
  <!-- 外部图标 -->
  <div v-if="isExternalIcon" :style="styleExternalIcon" class="svg-icon-external svg-icon"></div>
  <!-- 内部图标 -->
  <svg v-else :class="className">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { isExternal } from '@/utils/validate';
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
});

/**
 * 判断是否是外部图标
 */
const isExternalIcon = computed(() => isExternal(props.icon));

/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => (
  {
    'mask': `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no - repeat 50% 50%`
  })
)

/**
 * 内部图标
 */
const iconName = computed(() => `#icon-${props.icon}`)

</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon-external {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
