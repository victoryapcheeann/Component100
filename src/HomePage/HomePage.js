import React, { Component } from 'react';
import './HomePage.css';
import AppEffect from '../AppEffect';

import Colourful2018 from './Colourful2018/Colourful2018';
import Sample from './Sample/Sample';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      currentHomePageComponent : Colourful2018
    }
  }

  renderComponent = (componentHomePageName) => {
      this.setState ({
        currentHomePageComponent : componentHomePageName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>HomePage</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Colourful2018)}>Colorful 2018</button>
          </div>
          <this.state.currentHomePageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default HomePage;
