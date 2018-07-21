import React, { Component } from 'react';
import './Slider.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentSliderComponent : Sample
    }
  }

  renderComponent = (componentSliderName) => {
      this.setState ({
        currentSliderComponent : componentSliderName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Slider</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentSliderComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Slider;
