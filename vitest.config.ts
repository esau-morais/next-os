import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setupTests.ts'],
    include: ['./src/**/*.spec.{ts,tsx}'],
    watchExclude: [
      '.*\\/node_modules\\/.*',
      '.*\\/build\\/.*'
    ],
  },
})
