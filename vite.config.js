import {
  defineConfig
} from "vite";
import tailwindcss from "@tailwindcss/vite";
import {
  resolve
} from "path";
// 1. IMPORT THE CRITICAL CSS PLUGIN
// import critical from 'rollup-plugin-critical';
// Use an import alias if necessary, but this is the standard import

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    // 2. ADD THE CRITICAL CSS PLUGIN
    // This plugin extracts CSS needed for initial view, inlines it, and loads the rest async.
    /*
    critical({
      criticalUrl: './dist/index.html',
      criticalBase: './dist/',
      criticalPages: [{
        uri: 'index.html',
        template: 'index'
      }],
      criticalConfig: {
        inline: true, // Injects critical CSS directly into the HTML <head>
        // Adjust dimensions to cover common viewports
        dimensions: [{
          width: 1300,
          height: 900
        },
        {
          width: 375,
          height: 667
        }
        ]
      }
    })
    */
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    // ⚠️ IMPORTANT FIX: Re-enable CSS splitting
    cssCodeSplit: true,
    /* Setting this to 'true' ensures your large style sheet is broken into smaller, non-blocking chunks.
    The 'critical' plugin then handles the initial render styles for the highest performance score.
    */
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
        passes: 2,
        unsafe: false,
        unsafe_comps: false,
        unsafe_math: false,
        unsafe_proto: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['react-icons'],
          seo: ['react-helmet-async'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Keep CSS files in a separate folder for clarity
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash].[ext]';
          }
          return 'assets/[ext]/[name]-[hash].[ext]';
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  css: {
    devSourcemap: false,
  },
});