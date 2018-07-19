import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div>
        <button onClick={() => this.renderComponent(Animation)}>Animation</button>
        <button onClick={() => this.renderComponent(Background)}>Background</button>
        <button onClick={() => this.renderComponent(Button)}>Button</button>
        <button onClick={() => this.renderComponent(Calender)}>Calender</button>
        <button onClick={() => this.renderComponent(ChartStats)}>ChartStats</button>
        <button onClick={() => this.renderComponent(Chat)}>Chat</button>
        <button onClick={() => this.renderComponent(Colours)}>Colours</button>
        <button onClick={() => this.renderComponent(DataDisplay)}>DataDisplay</button>
        <button onClick={() => this.renderComponent(DataInput)}>DataInput</button>
        <button onClick={() => this.renderComponent(Effect3d)}>Effect3d</button>
        <button onClick={() => this.renderComponent(ErrorPage)}>ErrorPage</button>
        <button onClick={() => this.renderComponent(Feedback)}>Feedback</button>
        <button onClick={() => this.renderComponent(HomePage)}>HomePage</button>
        <button onClick={() => this.renderComponent(Icon)}>Icon</button>
        <button onClick={() => this.renderComponent(Image)}>Image</button>
        <button onClick={() => this.renderComponent(Loader)}>Loader</button>
        <button onClick={() => this.renderComponent(Lottie)}>Lottie</button>
        <button onClick={() => this.renderComponent(Menu)}>Menu</button>
        <button onClick={() => this.renderComponent(Payment)}>Payment</button>
        <button onClick={() => this.renderComponent(Presentation)}>Presentation</button>
        <button onClick={() => this.renderComponent(Profile)}>Profile</button>
        <button onClick={() => this.renderComponent(QuestionAnswers)}>QuestionAnswers</button>
        <button onClick={() => this.renderComponent(RandomStuff)}>RandomStuff</button>
        <button onClick={() => this.renderComponent(Slider)}>Slider</button>
        <button onClick={() => this.renderComponent(TextEffect)}>TextEffect</button>
        <button onClick={() => this.renderComponent(Timeline)}>Timeline</button>
        <button onClick={() => this.renderComponent(Tour)}>Tour</button>
        <button onClick={() => this.renderComponent(TransitionEffect)}>TransitionEffect</button>
        <button onClick={() => this.renderComponent(Weather)}>Weather</button>
        <this.state.currentComponent />
      </div>
    );
  }
}

export default App;
