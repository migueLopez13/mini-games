import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    })
  ],
  server: { port: 8080, host: true },
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'pinia'],
          vuetify: ['vuetify', 'vuetify/components', 'vuetify/directives'],
          materialdesignicons: ['@mdi/font/css/materialdesignicons.css']
        }
      }
    }
  }
})
