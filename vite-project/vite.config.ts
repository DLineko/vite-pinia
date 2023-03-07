import { defineConfig } from 'vite'
import {fileURLToPath} from "url";
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      //
     "@": fileURLToPath(new URL('./src',import.meta.url)),
      //
      '@components':path.resolve(__dirname,'src/components')
    }
  }
})
