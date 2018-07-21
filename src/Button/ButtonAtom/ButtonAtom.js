import React, { Component } from 'react';
import './ButtonAtom.css';

class ButtonAtom extends Component {
  render() {
    return (
        <div>
          <div className="atomButtonContainer">
          	<div className="atomBtn">
          		<span>Atom</span>
          		<div className="atomDot"></div>
          	</div>
          	<h1>&#x261D; Hover on the button &#x261D;</h1>
          </div>
        </div>
    );
  }
}

export default ButtonAtom;
