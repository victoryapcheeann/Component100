import React, { Component } from 'react';
import './CalenderPlan.css';
import AppEffect from '../../AppEffect';
import IoAndroidAdd from 'react-icons/lib/io/android-add';
import IoIosStarOutline from 'react-icons/lib/io/ios-star-outline';
import IoBonfire from 'react-icons/lib/io/bonfire';
import IoRadioWaves from 'react-icons/lib/io/radio-waves';
import IoIosArrowForward from 'react-icons/lib/io/ios-arrow-forward';

class Sample extends Component {
  render() {
    return (
        <AppEffect>
        <div className="mobile-wrapper">

<header className="calenderPlanHeader">
   <div className="calenderPlanContainer">
      <span>Welcome Back!</span>
      <h1>Calendar Plan</h1>

      <div className="menu-toggle">
         <div>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
   </div>
</header>


<section className="today-box" id="today-box">
   <span className="breadcrumb">Today</span>
   <h3 className="date-title">May 15, 2018</h3>

   <div className="plus-icon">
      <i className="ion"><IoAndroidAdd/></i>
   </div>
</section>

<section className="upcoming-events">
   <div className="calenderPlanContainer">
      <h3>
         Lastest Events
      </h3>
      <div className="events-wrapper">
         <div className="event">
            <i className="ion hot"><IoBonfire /></i>
            <h4 className="event__point">11:00 am</h4>
            <span className="event__duration">in 30 minutes.</span>
            <p className="event__description">
               Monday briefing with the team (...).
            </p>
         </div>
         <div className="event">
            <i className="ion done"><IoBonfire /></i>
            <h4 className="event__point">12:00 pm</h4>
            <span className="event__duration">in 1 hour.</span>
            <p className="event__description">
               Lunch with Paul Mccartney @Burgers House!
            </p>
         </div>
         <div className="event active">
            <i className="ion icon-in-active-mode"><IoRadioWaves /></i>
            <h4 className="event__point">14:00 pm</h4>
            <p className="event__description">
               Meet clients from project.
            </p>
         </div>
         <div className="event">
            <i className="ion upcoming"><IoBonfire/></i>
            <h4 className="event__point">20:45 pm</h4>
            <span className="event__duration">in 45 minutes.</span>
            <p className="event__description">
               Watch sci-fi series.
            </p>
         </div>
         <div className="event">
            <i className="ion upcoming"><IoBonfire/></i>
            <h4 className="event__point">23:15 pm</h4>
            <span className="event__duration">in 20 minutes.</span>
            <p className="event__description">
               Customer dialog on Skype.
            </p>
         </div>
      </div>
      <button className="add-event-button">
         <span className="add-event-button__title">Add Event</span>

         <span className="add-event-button__icon">
            <i className="ion"><IoIosStarOutline/></i>
         </span>


      </button>
   </div>
</section>
</div>

        </AppEffect>
    );
  }
}

export default Sample;
