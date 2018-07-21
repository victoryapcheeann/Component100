import React, { Component } from 'react';
import './ButtonAtom.css';
import AppEffect from '../../AppEffect'

class ButtonAtom extends Component {
  render() {
    return (
        <AppEffect>
          <div className="atomButtonContainer">
          	<div className="atomBtn">
          		<span>Atom</span>
          		<div className="atomDot"></div>
          	</div>
          	<h1>&#x261D; Hover on the button &#x261D;</h1>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonAtom;
