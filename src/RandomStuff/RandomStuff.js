import React, { Component } from 'react';
import './RandomStuff.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class RandomStuff extends Component {
  constructor() {
    super();
    this.state = {
      currentRandomStuffComponent : Sample
    }
  }

  renderComponent = (componentRandomStuffName) => {
      this.setState ({
        currentRandomStuffComponent : componentRandomStuffName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>RandomStuff</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentRandomStuffComponent />
        </div>
      </AppEffect>
    );
  }
}

export default RandomStuff;
