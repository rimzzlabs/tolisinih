import prefresh from '@prefresh/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    prefresh()
    // VitePWA({
    //   disable: process.env.NODE_ENV === 'development',
    //   manifest: {
    //     theme_color: '#ffffff',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     start_url: '/',
    //     scope: '/',
    //     name: 'Tolisinih - Ease Up Your Daily Tasks',
    //     short_name: 'Tolisinih',
    //     lang: 'en',
    //     description: 'Tolisinih is a web app that helps you to ease up your daily tasks.'
    //   },
    //   minify: true
    // })
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  resolve: {
    alias: {
      '@': '/src',
      react: 'preact/compat'
    }
  }
})
