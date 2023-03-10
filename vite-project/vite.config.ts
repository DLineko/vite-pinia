import {defineConfig} from 'vite'
import {fileURLToPath} from "url";
import path from "path"
import vue from '@vitejs/plugin-vue'
import AuthImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AuthImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
      ],
      imports: ['vue', 'vue-router','pinia'],
      vueTemplate: true,
      eslintrc: {
        enabled: true, // 若没此json文件，先开启，生成后在关闭
      },
      dts: true, // 设置auto-import.d.ts生成路径 Default ./auto-imports.d.ts

    })
  ],
  base: "./",
  resolve: {
    alias: {
      //
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      //
      '@components': path.resolve(__dirname, 'src/components'),

      '@pages': path.resolve(__dirname, 'src/@Pages'),
    }
  }
})
