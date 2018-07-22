import React, { Component } from 'react';
import './Feedback.css';
import AppEffect from '../AppEffect';

import Feedback1 from './Feedback1/Feedback1';
import Sample from './Sample/Sample';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      currentFeedbackComponent : Feedback1
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
            <button className='appButtonStyle' onClick={() => this.renderComponent(Feedback1)}>Feedback Style 1</button>
          </div>
          <this.state.currentFeedbackComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Feedback;
