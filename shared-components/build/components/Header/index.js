import * as React from 'react';
import Logo from '../Logo';
export var Header = function () {
    return React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-info mb-4" },
        React.createElement("a", { className: "navbar-brand", href: "#" },
            React.createElement(Logo, null)),
        React.createElement("div", { className: "collapse navbar-collapse" },
            React.createElement("div", { className: "navbar-nav" },
                React.createElement("a", { className: "nav-item nav-link", href: "#" }, "SPA TEAM A"),
                React.createElement("a", { className: "nav-item nav-link", href: "#" }, "SPA TEAM B"))));
};
export default Header;
