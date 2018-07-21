import React, { Component } from 'react';
import './TextEffect.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class TextEffect extends Component {
  constructor() {
    super();
    this.state = {
      currentTextEffectComponent : Sample
    }
  }

  renderComponent = (componentTextEffectName) => {
      this.setState ({
        currentTextEffectComponent : componentTextEffectName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>TextEffect</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentTextEffectComponent />
        </div>
      </AppEffect>
    );
  }
}

export default TextEffect;
