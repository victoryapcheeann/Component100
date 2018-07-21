import React, { Component } from 'react';
import './DataDisplay.css';
import AppEffect from '../AppEffect';

import BorderAnimation from './BorderAnimation/BorderAnimation';
import CoinCard from './CoinCard/CoinCard';
import CalenderPlan from './CalenderPlan/CalenderPlan';
import EventCard from './EventCard/EventCard';
import EventTicket from './EventTicket/EventTicket';

class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      currentDataDisplayComponent : EventCard
    }
  }

  renderComponent = (componentDataDisplayName) => {
      this.setState ({
        currentDataDisplayComponent : componentDataDisplayName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Data Display</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(BorderAnimation)}>Border Animation</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(CoinCard)}>Coin Card</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(CalenderPlan)}>Calender Plan</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(EventCard)}>Event Card</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(EventTicket)}>Event Ticket</button>
          </div>
          <this.state.currentDataDisplayComponent />
        </div>
      </AppEffect>
    );
  }
}

export default DataDisplay;
