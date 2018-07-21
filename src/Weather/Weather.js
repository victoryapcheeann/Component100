import React, { Component } from 'react';
import './Weather.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      currentWeatherComponent : Sample
    }
  }

  renderComponent = (componentWeatherName) => {
      this.setState ({
        currentWeatherComponent : componentWeatherName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Weather</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentWeatherComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Weather;
