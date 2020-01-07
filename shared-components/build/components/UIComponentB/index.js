import * as React from 'react';
export var UIComponentB = function () {
    return React.createElement("div", { className: "card bg-info" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, "UI Component B"),
            React.createElement("p", { className: "card-text" }, "Lazily loaded UI Component B from shared-components")));
};
export default UIComponentB;
