import React, { lazy, Suspense } from 'react';

const LazyGreeting = lazy(() => import('./Greeting'));

const Greeting = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGreeting {...props} />
  </Suspense>
);

export default Greeting;
