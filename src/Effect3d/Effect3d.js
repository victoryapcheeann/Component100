import React, { Component } from 'react';
import './Effect3d.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Effect3d extends Component {
  constructor() {
    super();
    this.state = {
      currentEffect3dComponent : Sample
    }
  }

  renderComponent = (componentEffect3dName) => {
      this.setState ({
        currentEffect3dComponent : componentEffect3dName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Effect3d</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentEffect3dComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Effect3d;
