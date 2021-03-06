import React, { Component } from 'react';
import './ButtonPassword.css';
import AppEffect from '../../AppEffect'

class ButtonPassword extends Component {
  render() {
    return (
        <AppEffect>
          <div className="buttonPasswordContainer">
          <div className="password">
            <input type="checkbox" className="password--visibleToggle"/>
            <div className="password--background"></div>
            <div className="password--visibleToggle-eye open">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/138980/eye-open.png" />
            </div>
            <div className="password--visibleToggle-eye close">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/138980/eye-close.png" />
            </div>
            <svg version="1.1" id="Capa_1" className="password--lock">
            <g>
          	<path d="M25.534,14.457h-1.529V9.361c0-2.541-0.965-4.871-2.555-6.572C19.864,1.09,17.602-0.006,15.11,0
          		c-2.494-0.006-4.756,1.09-6.34,2.789C7.179,4.49,6.214,6.82,6.214,9.361v5.096H4.683c-0.629,0-1.145,0.512-1.145,1.145v13.471
          		c0,0.637,0.516,1.148,1.145,1.148h20.852c0.635,0,1.148-0.512,1.148-1.148V15.602C26.683,14.969,26.169,14.457,25.534,14.457z
          		 M10.436,9.361c0-1.465,0.559-2.766,1.42-3.686c0.867-0.922,2-1.453,3.254-1.453c1.252,0,2.385,0.531,3.25,1.453
          		c0.865,0.92,1.42,2.221,1.42,3.686v5.096h-9.344V9.361z"/>
              </g>
            </svg>
            <input type="text" className="password--input" value="I love you💖"/>
          </div>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonPassword;
