import React, { Component } from 'react';
import './Lottie.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Lottie extends Component {
  constructor() {
    super();
    this.state = {
      currentLottieComponent : Sample
    }
  }

  renderComponent = (componentLottieName) => {
      this.setState ({
        currentLottieComponent : componentLottieName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Lottie</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentLottieComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Lottie;
