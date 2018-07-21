import React, { Component } from 'react';
import './DataDisplay.css';
import AppEffect from '../AppEffect'

import BorderAnimation from './BorderAnimation/BorderAnimation'
import CoinCard from './CoinCard/CoinCard'
import Sample from './Sample/Sample'

class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      currentDataDisplayComponent : Sample
    }
  }

  renderComponent = (componentDataDisplayName) => {
      this.setState ({
        currentDataDisplayComponent : componentDataDisplayName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>DataDisplay</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(BorderAnimation)}>Border Animation</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(CoinCard)}>Coin Card</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentDataDisplayComponent />
        </div>
      </AppEffect>
    );
  }
}

export default DataDisplay;
