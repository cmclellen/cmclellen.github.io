import React, { lazy, Suspense } from 'react';

const LazyHomeHero = lazy(() => import('./HomeHero'));

const HomeHero = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeHero {...props} />
  </Suspense>
);

export default HomeHero;
