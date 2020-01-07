import * as React from 'react';

export const UIComponentB:  React.FC  = () => {
  return <div className="card bg-info">
    <div className="card-body">
      <h5 className="card-title">UI Component B</h5>
      <p className="card-text">Lazily loaded UI Component B from shared-components</p>
    </div>
  </div>
}

export default UIComponentB;
