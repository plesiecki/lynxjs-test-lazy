import { defineConfig, mergeConfig } from 'vitest/config'
import { createVitestConfig } from '@lynx-js/react/testing-library/vitest-config'

const defaultConfig = await createVitestConfig();

const config = defineConfig({
  test: {
    setupFiles: [
      './src/__tests__/setup-globals.ts',
    ],
  },
});

export default mergeConfig(defaultConfig, config);
