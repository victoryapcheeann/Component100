import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet} from 'react-kawaii';

import Button from './Button/Button';
import DataDisplay from './DataDisplay/DataDisplay';
import Feedback from './Feedback/Feedback';
import HomePage from './HomePage/HomePage';
import Icon from './Icon/Icon';
import Image from './Image/Image';
import Loader from './Loader/Loader';
import Slider from './Slider/Slider';
import TextEffect from './TextEffect/TextEffect';
import TransitionEffect from './TransitionEffect/TransitionEffect';
import Weather from './Weather/Weather';

import FaCodepen from 'react-icons/lib/fa/codepen';
import FaDribbble from 'react-icons/lib/fa/dribbble';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent : Button
    }
  }

  renderComponent = (componentName) => {
      this.setState ({
        currentComponent : componentName
      })
  }

  render() {
    return (
      <div className='mainContainer columnStyle'>
        <div className='rowStyle'>
          <Planet size={80} mood="happy" color="#FCCB7E" text="I'm a planet!" showTextOnHover={true} />
          <div className='columnStyle'>
            <h1>Component100</h1>
            <span className="miniTextStyle">Non-responsive, please view it on desktop</span>
          </div>
        </div>
          <div className="rowStyle marginTopStyle">
            <span className="marginRightStyle">Source of knowledge:</span>
            <a href="https://codepen.io/"><FaCodepen size={50} color="black" className="marginRightStyle"/></a>
            <a href="https://tympanus.net/codrops/">
              <img className="codropIconSize marginRightStyle" src="/codrop.png"/>
            </a>
            <a href="https://dribbble.com/"><FaDribbble size={50} color="pink"/></a>
          </div>
        <span className="marginTopStyle">
          Choose one of the cateogry!
        </span>
        <div className='appButtonRowStyle'>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Button)}>Button</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(DataDisplay)}>Data Display</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Feedback)}>Feedback</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(HomePage)}>Home Page</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Icon)}>Icon</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Image)}>Image</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Loader)}>Loader</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Slider)}>Slider</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(TextEffect)}>Text Effect</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(TransitionEffect)}>Transition Effect</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Weather)}>Weather</button>
        </div>
        <this.state.currentComponent/>
      </div>
    );
  }
}

export default App;
