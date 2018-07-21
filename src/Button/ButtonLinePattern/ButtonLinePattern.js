import React, { Component } from 'react';
import './ButtonLinePattern.css';
import AppEffect from '../../AppEffect'

class ButtonLinePattern extends Component {
  render() {
    return (
        <AppEffect>
          <div className="g-container">
              <div className="m-btn s-irregularLineMove">Hover Me</div>
              <div className="m-btn s-irregularDoubleLineMove">Hover Me</div>
              <div className="m-btn s-irregularDoubleLineMoveTwo">Hover Me</div>
              <div className="m-btn s-irregularColorMove">Hover Me</div>
              <div className="m-btn s-pesoduSlice" data-content="Hover Me">Hover Me</div>
              <div className="m-btn s-irregularShadowMove">Hover Me</div>
              <div className="m-btn s-irregularShadowScale">Hover Me</div>
              <div className="m-btn s-dash">Hover Me</div>
              <div className="m-btn s-mixblur" data-content="Camera">Camera</div>
              <div className="m-btn s-svgline">
                  <svg>
                      <rect className="shape" height="64" width="180"></rect>
                  </svg>
                  <div className="g-text">HOVER ME</div>
              </div>

              <div className="m-btn s-svgMutiLine">
                  <svg>
                      <rect className="shape" height="64" width="180"></rect>
                  </svg>
                  <div className="g-text">HOVER ME</div>
              </div>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonLinePattern;
