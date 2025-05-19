import '@testing-library/jest-dom';
import { expect, it, vi } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@lynx-js/react/testing-library';
import { App } from '../App.tsx';

declare global {
  var __vite_ssr_dynamic_import__: (url: string) => Promise<any>
}

vi.mock('@lynx-js/react/internal', async (importOriginal) => {
  return {
    ...await importOriginal(),
    __dynamicImport: (url: string) => {
      return __vite_ssr_dynamic_import__(url);
    }
  }
});

it.only('should render lazy component', async () => {
  const { container } = render(
    <App url={'./LazyTestSubject'} />
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <view>
      <text>
        loading...
      </text>
    </view>
  `);

  await waitForElementToBeRemoved(() => screen.getByText('loading...'));

  expect(container.firstChild).toMatchInlineSnapshot(`
    <view>
      <text>
        Hello from LazyTestSubject
      </text>
    </view>
  `);
});
