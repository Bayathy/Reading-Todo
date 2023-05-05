import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#35a9f6',
        background_color: '#f69435',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        name: 'Reading-Todo',
        short_name: '積読消化',
        description:
          '\u7a4d\u8aad\u9632\u6b62\u7528\u30c4\u30fc\u30eb\u3067\u3059',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        share_target: {
          action: '/',
          method: 'POST',
          params: {
            title: 'title',
            text: 'text',
            url: 'url',
          },
        },
      },
    }),
  ],
  publicDir: './public',
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
})
