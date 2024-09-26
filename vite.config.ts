/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 从.ts(x)源文件中生成声明文件(*.d.ts)
    dts()
  ],
  resolve: {
    alias: {
      'craftex-ui': path.resolve(__dirname, './src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "craftex-ui",
      fileName: (format) => `craftex-ui.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "cjs",
      },
    },
  },
})
