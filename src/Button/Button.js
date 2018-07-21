import React, { Component } from 'react';
import './Button.css';
import AppEffect from '../AppEffect'

import ButtonHoverDraw from './ButtonHoverDraw/ButtonHoverDraw';
import ButtonWithGradientShadow from './ButtonWithGradientShadow/ButtonWithGradientShadow';
import ButtonFlip from './ButtonFlip/ButtonFlip';
import ButtonAtom from './ButtonAtom/ButtonAtom';
import ButtonDayNightToggle from './ButtonDayNightToggle/ButtonDayNightToggle';
import ButtonColorfulSwitch from './ButtonColorfulSwitch/ButtonColorfulSwitch';
import ButtonLinePattern from './ButtonLinePattern/ButtonLinePattern';
import ButtonPassword from './ButtonPassword/ButtonPassword';
import Sample from './Sample/Sample';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      currentButtonComponent : ButtonHoverDraw
    }
  }

  renderComponent = (componentButtonName) => {
      this.setState ({
        currentButtonComponent : componentButtonName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonHoverDraw)}>Hover Draw</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonWithGradientShadow)}>Gradient Shadow</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonFlip)}>Flip</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonAtom)}>Atom</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonDayNightToggle)}>Day Night Toggle</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonColorfulSwitch)}>Hover Triange</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonLinePattern)}>Line Pattern</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonPassword)}>Password</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentButtonComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Button;
