import * as React from 'react';

import { Header, UIComponentA, UIComponentBLazy } from 'shared-components';
import { TeamCComponent } from 'team-c-interface';

import TeamAComponent1 from './TeamAComponent1';
import TeamAComponent2Lazy from './TeamAComponent2Lazy';

export default class Page extends React.Component {

  render() {
    return <div className="container" style={{ margin: '40px auto' }}>
      <Header />
      <div className="row">
        <div className="col-3">
          <UIComponentA />
          <div className="mb-2"></div>
          <UIComponentBLazy />
        </div>
        <div className="col">
          <TeamAComponent1 />
          <div className="mb-2"></div>
          <TeamAComponent2Lazy />
        </div>

        <div className="col-4">
          <TeamCComponent />
        </div>
      </div>
    </div>
  }
}
