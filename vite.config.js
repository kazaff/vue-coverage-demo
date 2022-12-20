import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    istanbul({
        exclude: ['node_modules', 'test/', 'dist/'],
        extension: ['.js', '.ts', '.vue'],
        requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  }
})
