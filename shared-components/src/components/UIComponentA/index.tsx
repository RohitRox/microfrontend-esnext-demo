import * as React from 'react';

export const UIComponentA:  React.FC  = () => {
  return <div className="card bg-info">
    <div className="card-body">
      <h5 className="card-title">UI Component A</h5>
      <p className="card-text">UI Component A from shared-components</p>
    </div>
  </div>
}

export default UIComponentA;
