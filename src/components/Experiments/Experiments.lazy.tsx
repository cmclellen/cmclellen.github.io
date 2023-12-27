import React, { lazy, Suspense } from 'react';

const LazyExperiments = lazy(() => import('./Experiments'));

const Experiments = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperiments {...props} />
  </Suspense>
);

export default Experiments;
