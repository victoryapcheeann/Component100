import React, { Component } from 'react';
import './ButtonFlip.css';

class ButtonFlip extends Component {
  render() {
    return (
      <div>
        <div className="circle-container">
        	<div className="outer-ring"></div>
        	<div className="circle">
        		<div className="front">
        			<p>Start</p>
        		</div>
        		<div className="back">
        			<img className="back-logo" src="//theelevationgroup.com/img/logo.svg" alt="The Elevation Group Logo" />
        		</div>
        	</div>
        </div>
        </div>
    );
  }
}

export default ButtonFlip;
