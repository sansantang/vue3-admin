import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      },
      // additionalData: `@use "@/styles/sass/variables.module.scss" as *;@use "@/styles/sass/mixin.scss" as *;`
      // 为 SCSS 配置别名（关键配置）
      importer: [
        (url) => {
          // 处理以 @/ 开头的路径
          if (url.startsWith('@/')) {
            return {
              file: path.resolve(__dirname, './src', url.slice(2))
            }
          }
          return null
        }
      ]
    }
  }
  //代理配置
  // server: {
  //   proxy: {
  //     // 代理所有 /api 的请求
  //     '/api': {
  //       //代理请求后的地址
  //       target: 'https://api.xxx.com/',
  //       //跨域
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
