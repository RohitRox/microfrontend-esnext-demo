import * as React from 'react';
var LogoImg = require('../../images/app-logo.png');
var Logo = function () {
    return React.createElement("img", { height: "44px", width: "44px", src: LogoImg, alt: "Logo from UI Components", title: "Logo from UI Components" });
};
export default Logo;
