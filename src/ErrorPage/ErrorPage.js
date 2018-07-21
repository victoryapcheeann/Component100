import React, { Component } from 'react';
import './ErrorPage.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class ErrorPage extends Component {
  constructor() {
    super();
    this.state = {
      currentErrorPageComponent : Sample
    }
  }

  renderComponent = (componentErrorPageName) => {
      this.setState ({
        currentErrorPageComponent : componentErrorPageName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>ErrorPage</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentErrorPageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default ErrorPage;
