import React, { Component } from 'react';
import './Timeline.css';
import AppEffect from '../../AppEffect'

class Timeline extends Component {
  render() {
    return (
        <AppEffect>
        <div className="socialProfileContainer">
    <div className="navbar">
      <a href="#">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>
      <div className="profile-pic">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" />
        <div className="notification"></div>
      </div>
      <span>Timeline</span>
    </div>

    <div className="header">
      <div className="color-overlay">
        <div className="day-number">8</div>
        <div className="date-right">
          <div className="day-name">Monday</div>
          <div className="month">February 2015</div>
        </div>
      </div>
      <div className="actionbutton">+</div>
    </div>

    <div className="timeline">
      <ul>
        <li>
          <div className="bullet pink"></div>
          <div className="time">5pm</div>
          <div className="desc">
            <h3>New Icon</h3>
            <h4>Mobile App</h4>
          </div>
        </li>
        <li>
          <div className="bullet green"></div>
          <div className="time">3 - 4pm</div>
          <div className="desc">
            <h3>Design Stand Up</h3>
            <h4>Hangouts</h4>
            <div className="people">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg" alt="" />
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" alt="" />
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="bullet orange"></div>
          <div className="time">12pm</div>
          <div className="desc">
            <h3>Lunch Break</h3>
          </div>
        </li>
        <li>
          <div className="bullet green"></div>
          <div className="time">9 - 11am</div>
          <div className="desc">
            <h3>Finish Home Screen</h3>
            <h4>Web App</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
        </AppEffect>
    );
  }
}

export default Timeline;
