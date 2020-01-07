import * as React from 'react';
import { lazy, Suspense } from 'react';

const TeamAComponent2 = lazy(() => import('./TeamAComponent2'));

const TeamAComponent2Lazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<p>Loading Team A Component 2 ...</p>}>
      <TeamAComponent2 />
    </Suspense>
  </div>
}


export default TeamAComponent2Lazy
