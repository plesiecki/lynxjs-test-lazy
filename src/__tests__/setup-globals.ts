import { beforeEach } from 'vitest';

beforeEach(() => {
  // Workaround for errors when using JSX/Lynx primitives in a lazily loaded component during tests.
  globalThis.lynxTestingEnv.mainThread.globalThis.__DEV__ = false;
  globalThis.lynxTestingEnv.backgroundThread.globalThis.__DEV__ = false;
});
