import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      devtoolsJson()
    ],
    define: {
      // Provide an explicit app-level constant derived from an env var.
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    // Example: use an env var to set the dev server port conditionally.
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,  
      proxy: {
        '/dev': {
          target: `http://localhost:${env.API_PORT || 4020}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const rewritten = path.replace(/^\/dev/, '');
            console.log(`[PROXY] Rewriting ${path} → ${rewritten}`);
            return rewritten;
          },
          configure: (proxy) => {
            proxy.on('error', (err) => {
              console.log('[PROXY ERROR]', err);
            });
            proxy.on('proxyRes', (proxyRes, req) => {
              console.log(`[PROXY RES] ${req.method} ${req.url} → ${proxyRes.statusCode}`);
            });
          }
        }
      }
    },
  }
});