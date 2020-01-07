import * as React from 'react';
export var UIComponentA = function () {
    return React.createElement("div", { className: "card bg-info" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, "UI Component A"),
            React.createElement("p", { className: "card-text" }, "UI Component A from shared-components")));
};
export default UIComponentA;
