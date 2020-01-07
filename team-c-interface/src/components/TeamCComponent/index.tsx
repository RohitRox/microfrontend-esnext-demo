import * as React from 'react';

import { UIComponentA } from 'shared-components';

import TeamCComponentMain from '../TeamCComponentMain/lazy';

export const TeamCComponent:  React.FC  = () => {
  return <div className="card bg-success text-white">
    <div className="card-body">
      <h5 className="card-title">Team C Component</h5>
      <p className="card-text">UI Component from Team C</p>

      <TeamCComponentMain />

      < hr />

      <UIComponentA />
    </div>
  </div>
}

export default TeamCComponent;
