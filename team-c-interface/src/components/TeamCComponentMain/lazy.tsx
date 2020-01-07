import * as React from 'react';
import { lazy, Suspense } from 'react';

const TeamCComponentMain = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return import('./');
});

const TeamCComponentMainLazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<p>Loading Team C Component Main lazily...</p>}>
      <TeamCComponentMain />
    </Suspense>
  </div>
}

export default TeamCComponentMainLazy
