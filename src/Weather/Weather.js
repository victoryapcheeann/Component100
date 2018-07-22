import React, { Component } from 'react';
import './Weather.css';
import AppEffect from '../AppEffect';

import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherSnow from './WeatherSnow/WeatherSnow';
import MeteorShower from './MeteorShower/MeteorShower';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      currentWeatherComponent : WeatherIcon
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
            <button className='appButtonStyle' onClick={() => this.renderComponent(WeatherIcon)}>Weather Icon</button>
              <button className='appButtonStyle' onClick={() => this.renderComponent(WeatherSnow)}>Weather Snow</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(MeteorShower)}>Meteor Shower</button>
          </div>
          <this.state.currentWeatherComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Weather;
