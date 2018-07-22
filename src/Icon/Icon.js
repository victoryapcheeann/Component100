import React, { Component } from 'react';
import './Icon.css';
import AppEffect from '../AppEffect';

import BirdIcon from './BirdIcon/BirdIcon';
import UniverseIcon from './UniverseIcon/UniverseIcon';
import FireIcon from './Fire/Fire';
import TravelIcon from './TravelIcon/TravelIcon';

class Icon extends Component {
  constructor() {
    super();
    this.state = {
      currentIconComponent : BirdIcon
    }
  }

  renderComponent = (componentIconName) => {
      this.setState ({
        currentIconComponent : componentIconName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Icon</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(BirdIcon)}>Bird</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(UniverseIcon)}>Universe</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(FireIcon)}>Fire</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(TravelIcon)}>Travel</button>
          </div>
          <this.state.currentIconComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Icon;
