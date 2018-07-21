import React, { Component } from 'react';
import './ButtonColorfulSwitch.css';
import AppEffect from '../../AppEffect'

class buttonColorfulSwitch extends Component {
  render() {
    return (
        <AppEffect>
          <div class="colorful-switch">
            <input type="checkbox" class="colorful-switch__checkbox" id="colorful-switch-cb" />
            <label class="colorful-switch__label" for="colorful-switch-cb">
              <span class="colorful-switch__bg"></span>
              <span class="colorful-switch__dot"></span>
              <span class="colorful-switch__on">
                <span class="colorful-switch__on__inner"></span>
              </span>
              <span class="colorful-switch__off"></span>
            </label>
          </div>
        </AppEffect>
    );
  }
}

export default buttonColorfulSwitch;
