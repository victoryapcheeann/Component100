import React, { Component } from 'react';
import './DataInput.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class DataInput extends Component {
  constructor() {
    super();
    this.state = {
      currentDataInputComponent : Sample
    }
  }

  renderComponent = (componentDataInputName) => {
      this.setState ({
        currentDataInputComponent : componentDataInputName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>DataInput</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentDataInputComponent />
        </div>
      </AppEffect>
    );
  }
}

export default DataInput;
