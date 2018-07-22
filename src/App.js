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
import Menu from './Menu/Menu';
import Profile from './Profile/Profile';
import RandomStuff from './RandomStuff/RandomStuff';
import Slider from './Slider/Slider';
import TextEffect from './TextEffect/TextEffect';
import TransitionEffect from './TransitionEffect/TransitionEffect';
import Weather from './Weather/Weather';

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
        <div className='appTitleStyle rowStyle'>
          <Planet size={80} mood="happy" color="#FCCB7E" text="I'm a planet!" showTextOnHover={true} />
          <h1>Component100</h1>
        </div>
        <span>Choose one of the cateogry!</span>
        <div className='appButtonRowStyle'>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Button)}>Button</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(DataDisplay)}>Data Display</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Feedback)}>Feedback</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(HomePage)}>Home Page</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Icon)}>Icon</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Image)}>Image</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Loader)}>Loader</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Menu)}>Menu</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Profile)}>Profile</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(RandomStuff)}>Random Stuff</button>
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
