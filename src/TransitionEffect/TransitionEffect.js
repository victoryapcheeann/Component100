import React, { Component } from 'react';
import './TransitionEffect.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class TransitionEffect extends Component {
  constructor() {
    super();
    this.state = {
      currentTransitionEffectComponent : Sample
    }
  }

  renderComponent = (componentTransitionEffectName) => {
      this.setState ({
        currentTransitionEffectComponent : componentTransitionEffectName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>TransitionEffect</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentTransitionEffectComponent />
        </div>
      </AppEffect>
    );
  }
}

export default TransitionEffect;
