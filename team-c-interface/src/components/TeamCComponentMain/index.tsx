import * as React from 'react';

export const TeamCComponentMain:  React.FC  = () => {
  return <ul className="list-unstyled">
    <li className="media">
      <img src="https://placeimg.com/64/64/any" className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
      </div>
    </li>
    <li className="media my-4">
      <img src="https://placeimg.com/64/64/any" className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.
      </div>
    </li>
    <li className="media">
      <img src="https://placeimg.com/64/64/any" className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </li>
  </ul>
}

export default TeamCComponentMain as React.ComponentType<any>;
