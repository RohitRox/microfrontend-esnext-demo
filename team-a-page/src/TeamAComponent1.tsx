import * as React from 'react';

export const TeamAComponent1:  React.FC  = () => {
  return <div className="card bg-warning">
    <div className="card-body">
      <h5 className="card-title">Team A Component 1</h5>
      <p className="card-text">Normal component from team A</p>
    </div>

    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
}

export default TeamAComponent1;
