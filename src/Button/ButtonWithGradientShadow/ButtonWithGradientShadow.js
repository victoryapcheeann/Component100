import React, { Component } from 'react';
import './ButtonWithGradientShadow.css';
import AppEffect from '../../AppEffect'

class ButtonWithGradientShadow extends Component {
  render() {
    return (
        <AppEffect>
          <div className="wrapper">
          	<a href="#" className="fancy-button bg-gradient1"><span>Follow Me</span></a>
          	<a href="#" className="fancy-button bg-gradient2"><span>Messages</span></a>
          </div>

          <div className="wrapper">
          	<a href="#" className="fancy-button pop-onhover bg-gradient1"><span>Post A Comment</span></a>
          	<a href="#" className="fancy-button pop-onhover bg-gradient3"><span>Share Channel</span></a>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonWithGradientShadow;
