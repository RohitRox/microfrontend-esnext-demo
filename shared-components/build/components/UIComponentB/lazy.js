import * as React from 'react';
import { lazy, Suspense } from 'react';
var UIComponentB = lazy(function () { return import('./'); });
var UIComponentBLazy = function () {
    return React.createElement("div", { className: "central-comp" },
        React.createElement(Suspense, { fallback: React.createElement("p", null, "Loading UIComponentB ...") },
            React.createElement(UIComponentB, null)));
};
export default UIComponentBLazy;
