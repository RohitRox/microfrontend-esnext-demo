import * as React from 'react';
import { lazy, Suspense } from 'react';

const UIComponentB = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return import('./');
});

const UIComponentBLazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<span className="badge badge-light">Loading UI Component B lazily...</span>}>
      <UIComponentB />
    </Suspense>
  </div>
}

export default UIComponentBLazy
