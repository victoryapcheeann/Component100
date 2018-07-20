import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transition from 'react-transition-group/Transition';

import Animation from './Animation/Animation'
import Background from './Background/Background';
import Button from './Button/Button';
import Calender from './Calender/Calender';
import ChartStats from './ChartStats/ChartStats';
import Chat from './Chat/Chat';
import Colours from './Colours/Colours';
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
import Tour from './Tour/Tour';
import TransitionEffect from './TransitionEffect/TransitionEffect';
import Weather from './Weather/Weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent : Button
    }
  }

  renderComponent = (abc) => {
      this.setState ({
        currentComponent : abc
      })
  }

  render() {
    return (
      <div className="columnStyle">
        <h1>Component100</h1>
        <div className='appButtonRowStyle'>
          <div className='appbuttonContainer columnStyle'>
            <span>A</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Animation)}>Animation</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>B</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Background)}>Background</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Button)}>Button</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>C</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Calender)}>Calender</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ChartStats)}>ChartStats</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Chat)}>Chat</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Colours)}>Colours</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>D</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(DataDisplay)}>DataDisplay</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(DataInput)}>DataInput</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>E</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Effect3d)}>Effect3d</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ErrorPage)}>ErrorPage</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>F</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Feedback)}>Feedback</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>H</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(HomePage)}>HomePage</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>I</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Icon)}>Icon</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Image)}>Image</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>L</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Loader)}>Loader</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Lottie)}>Lottie</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>M</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Menu)}>Menu</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>P</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Payment)}>Payment</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Presentation)}>Presentation</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Profile)}>Profile</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>Q</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(QuestionAnswers)}>QuestionAnswers</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>R</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(RandomStuff)}>RandomStuff</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>S</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Slider)}>Slider</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>T</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(TextEffect)}>TextEffect</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Timeline)}>Timeline</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Tour)}>Tour</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(TransitionEffect)}>TransitionEffect</button>
          </div>
          <div className='appbuttonContainer columnStyle'>
            <span>W</span>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Weather)}>Weather</button>
          </div>
        </div>
        <this.state.currentComponent/>
      </div>
    );
  }
}

export default App;
