import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
    },
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/scss/variables.scss";`
          }
        }
      }
})
