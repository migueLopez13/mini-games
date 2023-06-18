import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  base:"/mini-games/",
  plugins: [
    vue({ template: transformAssetUrls }),
    vuetify({
      autoImport: true
    })
  ],
  server: { port: 8080, host: true },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'pinia'],
            vuetify: [
              'vuetify',
              'vuetify/components',
              'vuetify/directives',
              'webfontloader',
            ],
            materialdesignicons: ['@mdi/font/css/materialdesignicons.css'],
          },
        },
      },
    },
  

})
