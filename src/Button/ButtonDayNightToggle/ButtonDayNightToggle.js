import React, { Component } from 'react';
import './ButtonDayNightToggle.css';

class ButtonDayNightToggle extends Component {
  render() {
    return (
        <div className="buttonDayNightToggleContainer">
          <input className="buttonDayNightInputStyle" type="checkbox" id="c" />
            <label className="buttonDayNightLabelStyle" for="c">
            	<div id="buttonDayNightToggle">
            		<div id="c1"></div>
            		<div id="c2"></div>
            		<div id="c3"></div>
            	</div>
            </label>
            <section className="buttonDayNightSectionStyle">
            	<div className="buttonStar" id="s1"></div>
            	<div className="buttonStar" id="s2"></div>
            	<div className="buttonStar" id="s3"></div>
            	<div className="buttonStar" id="s4"></div>
            	<div className="buttonStar" id="s5"></div>
            	<div className="buttonNight">Good Night</div>
            	<div className="buttonDay">Good Morning</div>
          </section>
        </div>
    );
  }
}

export default ButtonDayNightToggle;
