import React, { Component } from 'react';
import './Loader.css';
import AppEffect from '../AppEffect'

import SquareLoader from './SquareLoader/SquareLoader';
import GlowingLoader from './GlowingLoader/GlowingLoader';
import StaircaseLoader from './StaircaseLoader/StaircaseLoader';

class Loader extends Component {
  constructor() {
    super();
    this.state = {
      currentLoaderComponent : SquareLoader
    }
  }

  renderComponent = (componentLoaderName) => {
      this.setState ({
        currentLoaderComponent : componentLoaderName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Loader</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(SquareLoader)}>Square Loader</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(GlowingLoader)}>Glowing Loader</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(StaircaseLoader)}>Staircase Loader</button>
          </div>
          <this.state.currentLoaderComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Loader;
