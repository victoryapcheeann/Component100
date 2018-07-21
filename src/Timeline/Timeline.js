import React, { Component } from 'react';
import './Timeline.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      currentTimelineComponent : Sample
    }
  }

  renderComponent = (componentTimelineName) => {
      this.setState ({
        currentTimelineComponent : componentTimelineName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Timeline</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentTimelineComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Timeline;
