import React, { Component } from 'react';
import './Payment.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      currentPaymentComponent : Sample
    }
  }

  renderComponent = (componentPaymentName) => {
      this.setState ({
        currentPaymentComponent : componentPaymentName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Payment</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentPaymentComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Payment;
