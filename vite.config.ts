import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import themePreprocessorPlugin from "@pureadmin/theme";
import { genScssMultipleScopeVars } from './src/utils/theme'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 自定义主题
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: genScssMultipleScopeVars(),
        extract: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/css/mixin.scss";'
      }
    }
  },
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://123.207.32.32:5000',
        changeOrigin: true, //开启代理
        ws: true, //启用websockets
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/kpi': {
        target: 'https://openai-node-eta.vercel.app/',
        changeOrigin: true, //开启代理
        ws: true, //启用websockets
        rewrite: (path) => path.replace(/^\/kpi/, '')
      }
    }
  },
})
