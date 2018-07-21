import React, { Component } from 'react';
import './Button.css';
import AppEffect from '../AppEffect'

import ButtonHoverDraw from './ButtonHoverDraw/ButtonHoverDraw';
import ButtonWithGradientShadow from './ButtonWithGradientShadow/ButtonWithGradientShadow';
import ButtonFlip from './ButtonFlip/ButtonFlip';
import ButtonAtom from './ButtonAtom/ButtonAtom';
import ButtonDayNightToggle from './ButtonDayNightToggle/ButtonDayNightToggle';

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
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonHoverDraw)}>Button Hover Draw</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonWithGradientShadow)}>Button With Gradient Shadow</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonFlip)}>Button Flip</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonAtom)}>Button Atom</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonDayNightToggle)}>Button Day ButtonDayNightToggle</button>
          </div>
          <this.state.currentButtonComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Button;
