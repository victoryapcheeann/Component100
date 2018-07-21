import React, { Component } from 'react';
import './QuestionAnswers.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class QuestionAnswers extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionAnswersComponent : Sample
    }
  }

  renderComponent = (componentQuestionAnswersName) => {
      this.setState ({
        currentQuestionAnswersComponent : componentQuestionAnswersName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>QuestionAnswers</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentQuestionAnswersComponent />
        </div>
      </AppEffect>
    );
  }
}

export default QuestionAnswers;
