import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Planet} from 'react-kawaii';

import Button from './Button/Button';
import DataDisplay from './DataDisplay/DataDisplay';
import DataInput from './DataInput/DataInput';
import Effect3d from'./Effect3d/Effect3d';
import ErrorPage from './ErrorPage/ErrorPage';
import Feedback from './Feedback/Feedback';
import HomePage from './HomePage/HomePage';
import Icon from './Icon/Icon';
import Image from './Image/Image';
import Loader from './Loader/Loader';
import Lottie from './Lottie/Lottie';
import Menu from './Menu/Menu';
import Payment from './Payment/Payment';
import Presentation from './Presentation/Presentation';
import Profile from './Profile/Profile';
import QuestionAnswers from './QuestionAnswers/QuestionAnswers';
import RandomStuff from './RandomStuff/RandomStuff';
import Slider from './Slider/Slider';
import TextEffect from './TextEffect/TextEffect';
import Timeline from './Timeline/Timeline';
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
          <h1 className='appTitleStyle'>Component100</h1>
        </div>
        <div className='appButtonRowStyle'>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">B</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Button)}>Button</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">D</span>
                <div className="subAppButtonStyle  columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(DataDisplay)}>DataDisplay</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(DataInput)}>DataInput</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">E</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Effect3d)}>Effect3d</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(ErrorPage)}>ErrorPage</button>
                </div>
          </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">F</span>
                <div className="subAppButtonStyle columnStyle">
                 <button className='appButtonStyle' onClick={() => this.renderComponent(Feedback)}>Feedback</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">H</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(HomePage)}>HomePage</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">I</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Icon)}>Icon</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Image)}>Image</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">L</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Loader)}>Loader</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Lottie)}>Lottie</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">M</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Menu)}>Menu</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">P</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Payment)}>Payment</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Presentation)}>Presentation</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Profile)}>Profile</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">Q</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(QuestionAnswers)}>QuestionAnswers</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">R</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(RandomStuff)}>RandomStuff</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">S</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Slider)}>Slider</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">T</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(TextEffect)}>TextEffect</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Timeline)}>Timeline</button>
                  <button className='appButtonStyle' onClick={() => this.renderComponent(TransitionEffect)}>TransitionEffect</button>
                </div>
            </div>
            <div className='appbuttonContainer columnStyle'>
              <span className="appLetterStyle">W</span>
                <div className="subAppButtonStyle columnStyle">
                  <button className='appButtonStyle' onClick={() => this.renderComponent(Weather)}>Weather</button>
                </div>
            </div>
        </div>
        <this.state.currentComponent/>
      </div>
    );
  }
}

export default App;
