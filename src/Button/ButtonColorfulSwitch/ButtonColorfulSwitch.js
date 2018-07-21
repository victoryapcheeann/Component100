import React, { Component } from 'react';
import './ButtonColorfulSwitch.css';
import AppEffect from '../../AppEffect'

class buttonColorfulSwitch extends Component {
  render() {
    return (
        <AppEffect>
          <div className="colorful-switch">
            <input type="checkbox" className="colorful-switch__checkbox" id="colorful-switch-cb" />
            <label className="colorful-switch__label" for="colorful-switch-cb">
              <span className="colorful-switch__bg"></span>
              <span className="colorful-switch__dot"></span>
              <span className="colorful-switch__on">
                <span className="colorful-switch__on__inner"></span>
              </span>
              <span className="colorful-switch__off"></span>
            </label>
          </div>
        </AppEffect>
    );
  }
}

export default buttonColorfulSwitch;
