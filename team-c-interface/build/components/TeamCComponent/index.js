import * as React from 'react';
import { UIComponentA } from 'shared-components';
import TeamCComponentMain from '../TeamCComponentMain/lazy';
export var TeamCComponent = function () {
    return React.createElement("div", { className: "card bg-success text-white" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, "Team C Component"),
            React.createElement("p", { className: "card-text" }, "UI Component from Team C"),
            React.createElement(TeamCComponentMain, null),
            React.createElement("hr", null),
            React.createElement(UIComponentA, null)));
};
export default TeamCComponent;
