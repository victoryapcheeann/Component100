import React, { Component } from 'react';
import './Presentation.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Presentation extends Component {
  constructor() {
    super();
    this.state = {
      currentPresentationComponent : Sample
    }
  }

  renderComponent = (componentPresentationName) => {
      this.setState ({
        currentPresentationComponent : componentPresentationName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Presentation</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentPresentationComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Presentation;
