import React, { Component } from 'react';
import './Image.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Image extends Component {
  constructor() {
    super();
    this.state = {
      currentImageComponent : Sample
    }
  }

  renderComponent = (componentImageName) => {
      this.setState ({
        currentImageComponent : componentImageName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Image</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentImageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Image;
