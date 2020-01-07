import * as React from 'react';
import { lazy, Suspense } from 'react';

const UIComponentB = lazy(() => import('./'));

const UIComponentBLazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<p>Loading UIComponentB ...</p>}>
      <UIComponentB />
    </Suspense>
  </div>
}

export default UIComponentBLazy
