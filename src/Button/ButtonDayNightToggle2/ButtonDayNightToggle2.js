import React, { Component } from 'react';
import './ButtonDayNightToggle2.css';
import AppEffect from '../../AppEffect'

class ButtonDayNightToggle2 extends Component {
  render() {
    return (
        <AppEffect>
          <label className="switch">
          <input className="switch__input" type="checkbox"/>
            <span className="switch__background">
             <span className="switch__toggle">
               <span className="switch__moon"></span>
             </span>
             <span className="switch__stars"></span>
             <span className="switch__clouds"></span>
            </span>
          </label>
        </AppEffect>
    );
  }
}

export default ButtonDayNightToggle2;
