import SvgIcon from '@/libs/svg-icons/index.vue'

/**
 * 全局注册SvgIcon组件
 * @param {Object} app - Vue应用实例
 */
export function setupSvgIcon(app) {
  app.component('SvgIcon', SvgIcon)
}
// 注意：SVG文件现在通过vite-plugin-svg-icons插件处理，不需要手动导入
