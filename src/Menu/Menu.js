import React, { Component } from 'react';
import './Menu.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      currentMenuComponent : Sample
    }
  }

  renderComponent = (componentMenuName) => {
      this.setState ({
        currentMenuComponent : componentMenuName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Menu</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentMenuComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Menu;
