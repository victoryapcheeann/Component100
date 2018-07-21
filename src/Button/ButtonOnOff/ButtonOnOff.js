import React, { Component } from 'react';
import './ButtonOnOff.css';
import AppEffect from '../../AppEffect'

class ButtonOnOff extends Component {
  render() {
    return (
        <AppEffect>
          <div className="buttonOnOffWrapper">
           <input className="buttonOnOffInput" id="dn" type="checkbox" />
           <label className="toggle buttonOnOffLabel" for="dn">
             <span className="toggle--buttonOnOffHandler"></span>
           </label>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonOnOff;
