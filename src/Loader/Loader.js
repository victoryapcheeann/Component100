import React, { Component } from 'react';
import './Loader.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Loader extends Component {
  constructor() {
    super();
    this.state = {
      currentLoaderComponent : Sample
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
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentLoaderComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Loader;
