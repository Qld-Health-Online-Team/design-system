import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import PrecompilePlugin from './PrecompilePlugin.js';
import HTMLPlugin from './HTMLPlugin.js';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      sassGlobImports(),
      PrecompilePlugin(),
      HTMLPlugin()
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, '../src/index.js')
        },
        output: {
          entryFileNames: (chunkInfo) => {
            return 'js/[name].js';
          },
          chunkFileNames: `js/[name].js`,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return 'main.css';
            }
            return `mysource_files/[name].[ext]`;
          },
          sourcemap: true
        }
      }
    },
    server: {
      port: 8080,
      open: true
    }
  }
});