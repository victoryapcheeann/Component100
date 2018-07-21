import React, { Component } from 'react';
import './Button.css';
import AppEffect from '../AppEffect'

import ButtonHoverDraw from './ButtonHoverDraw/ButtonHoverDraw';
import ButtonWithGradientShadow from './ButtonWithGradientShadow/ButtonWithGradientShadow';
import ButtonFlip from './ButtonFlip/ButtonFlip';
import ButtonAtom from './ButtonAtom/ButtonAtom';
import ButtonDayNightToggle from './ButtonDayNightToggle/ButtonDayNightToggle';
import ButtonDayNightToggle2 from './ButtonDayNightToggle2/ButtonDayNightToggle2';
import ButtonColorfulSwitch from './ButtonColorfulSwitch/ButtonColorfulSwitch';
import ButtonLinePattern from './ButtonLinePattern/ButtonLinePattern';
import ButtonPassword from './ButtonPassword/ButtonPassword';
import ButtonOnOff from './ButtonOnOff/ButtonOnOff';
import ButtonLinePattern2 from './ButtonLinePattern2/ButtonLinePattern2';
import ButtonPaper from './ButtonPaper/ButtonPaper';
import ButtonHappy from './ButtonHappy/ButtonHappy';
import ButtonNext from './ButtonNext/ButtonNext';
import ButtonCircle from './ButtonCircle/ButtonCircle';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      currentButtonComponent : ButtonDayNightToggle2
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
          <span>Button</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonHoverDraw)}>Hover Draw</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonWithGradientShadow)}>Gradient Shadow</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonFlip)}>Flip</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonAtom)}>Atom</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonDayNightToggle)}>Day Night</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonDayNightToggle2)}>Day Night 2</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonColorfulSwitch)}>Colorful Switch</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonLinePattern)}>Line Pattern</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonLinePattern2)}>Line Pattern 2</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonPassword)}>Password</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonOnOff)}>On Off</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonPaper)}>Paper</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonHappy)}>Happy</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonNext)}>Next</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ButtonCircle)}>Circle</button>
          </div>
          <this.state.currentButtonComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Button;
