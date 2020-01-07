import * as React from 'react';

import Logo from '../Logo';

export const Header:  React.FC  = () => {
  return  <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-4">
    <a className="navbar-brand" href="#"><Logo /></a>
    <div className="collapse navbar-collapse">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">SPA TEAM A</a>
        <a className="nav-item nav-link" href="#">SPA TEAM B</a>
      </div>
    </div>
  </nav>
}

export default Header;
