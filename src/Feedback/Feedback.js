import React, { Component } from 'react';
import './Feedback.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      currentFeedbackComponent : Sample
    }
  }

  renderComponent = (componentFeedbackName) => {
      this.setState ({
        currentFeedbackComponent : componentFeedbackName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Feedback</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentFeedbackComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Feedback;
