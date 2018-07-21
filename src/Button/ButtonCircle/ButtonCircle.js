import React, { Component } from 'react';
import './ButtonCircle.css';
import AppEffect from '../../AppEffect'

class ButtonCircle extends Component {
  render() {
    return (
        <AppEffect>
          <a href="#" className="circleCta">
          <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
             <path d="M1,5 L11,5"></path>
             <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </AppEffect>
    );
  }
}

export default ButtonCircle;
