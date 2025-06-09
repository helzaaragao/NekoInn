import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import {ghPages} from 'vite-plugin-gh-pages'


export default defineConfig({
  plugins: [react(),  tsconfigPaths(), 
    ghPages({branch: 'gh-pages', 
      repo: 'https://github.com/helzaaragao/NekoInn.git', 
      dotfiles: true
    })
  ],
  base: '/NekoInn/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          chakra: ['@chakra-ui/react'],
          i18n: ['i18next', 'react-i18next'],
          icons: ['phosphor-icons', 'lucide-react']
        }
      }
    }
  }
})
