import { Suspense, lazy } from '@lynx-js/react'

function LazyComponent({ url }: { url: string }) {
  const Component = lazy(() => import(url));

  return (
    <Suspense fallback={<text>loading...</text>}>
      <Component></Component>
    </Suspense>
  );
}

export function App({ url }: { url: string }) {

  return (
    <view>
      <LazyComponent url={url}></LazyComponent>
    </view>
  );
}
