import React, { Component } from 'react';
import './HomePage.css';
import AppEffect from '../AppEffect';

import Colourful2018 from './Colourful2018/Colourful2018';
import LoginPage from './LoginPage/LoginPage';
import Timeline from './Timeline/Timeline';

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
            <button className='appButtonStyle' onClick={() => this.renderComponent(LoginPage)}>Login Page</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Timeline)}>Timeline</button>
          </div>
          <this.state.currentHomePageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default HomePage;
