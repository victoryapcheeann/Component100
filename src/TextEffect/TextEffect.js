import React, { Component } from 'react';
import './TextEffect.css';
import AppEffect from '../AppEffect'

import StunningHoverEffect from './StunningHoverEffect/StunningHoverEffect';
import StunningTextInputEffect from './StunningTextInputEffect/StunningTextInputEffect';

class TextEffect extends Component {
  constructor() {
    super();
    this.state = {
      currentTextEffectComponent : StunningHoverEffect
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
            <button className='appButtonStyle' onClick={() => this.renderComponent(StunningHoverEffect)}>Stunning Hover Effect</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(StunningTextInputEffect)}>Stunning Text Input Effect</button>
          </div>
          <this.state.currentTextEffectComponent />
        </div>
      </AppEffect>
    );
  }
}

export default TextEffect;
