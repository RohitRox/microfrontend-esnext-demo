import * as React from 'react';

const LogoImg = require('../../images/app-logo.png');

const Logo: React.FC = () => {
  return <img
    height="44px"
    width="44px"
    src={LogoImg}
    alt="Logo from UI Components"
    title="Logo from UI Components"
  />
}

export default Logo;
