import React, { Component } from 'react';
import './ButtonHappy.css';
import AppEffect from '../../AppEffect'

class ButtonHappy extends Component {
  render() {
    return (
        <AppEffect>
          <div className="box">
          <input className="sr-only checkbox" type="checkbox" id="checkbox"/>
          <label className="happyLabel" for="checkbox">
           <div className="head">
             <div className="face">
               <div className="face__smile"></div>
               <div className="face__sleep"></div>
             </div>
           </div>
          </label>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonHappy;
