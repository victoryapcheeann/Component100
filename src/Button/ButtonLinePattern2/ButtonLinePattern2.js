import React, { Component } from 'react';
import './ButtonLinePattern2.css';
import AppEffect from '../../AppEffect'

class ButtonLinePattern2 extends Component {
  render() {
    return (
        <AppEffect>
          <div classNameName="sampleContainer">
            <div className="linePattern2Panel">
            <button>Home</button>
            <button>Menu</button>
            <button>Read more</button>
            <button>Submit</button>
            <button>Some other button</button>
            </div>
            <div className="linePattern2Panel linePattern2Pink">
            <button>Home</button>
            <button>Menu</button>
            <button>Read more</button>
            <button>Submit</button>
            <button>Just hover me already</button>
            </div>
            <div className="linePattern2Panel linePattern2Blue">
            <button>Home</button>
            <button>Menu</button>
            <button>Read more</button>
            <button>Submit</button>
            <button>I like it</button>
            </div>
            <div className="linePattern2Panel linePattern2Borderless">
            <button>Home</button>
            <button>Menu</button>
            <button>Read more</button>
            <button>Submit</button>
            <button>Any action actually</button>
            </div>
            <div className="linePattern2Panel linePattern2bw">
            <button>Home</button>
            <button>Menu</button>
            <button>Read more</button>
            <button>Submit</button>
            <button>I'm lovin it!</button>
            </div>
          </div>
        </AppEffect>
    );
  }
}

export default ButtonLinePattern2;
