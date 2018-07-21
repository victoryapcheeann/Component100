import React, { Component } from 'react';
import './HomePage.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      currentHomePageComponent : Sample
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
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentHomePageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default HomePage;
