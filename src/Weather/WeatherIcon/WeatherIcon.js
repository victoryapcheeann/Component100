import React, { Component } from 'react';
import './WeatherIcon.css';
import AppEffect from '../../AppEffect'

class WeatherIcon extends Component {
  render() {
    return (
        <AppEffect>
          <div className="weatherIconContainer">
          <body>
          <div className="hot">

          <span className="sun"></span>
          <span className="sunx"></span>
          </div>
          <div className="cloudy">
          <span className="cloud"></span>
          <span className="cloudx"></span>
          </div>
          <div className="stormy">
          <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          </ul>
          <span className="snowe"></span>
          <span className="snowex"></span>
          <span className="stick"></span>
          <span className="stick2"></span>
          </div>
          <div className="breezy">
          <ul>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          </ul>
          <span className="cloudr"></span>


          </div>
          <div className="night">
          <span className="moon"></span>
          <span className="spot1"></span>
          <span className="spot2"></span>
          <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          </ul>

          </div>

          </body>
          </div>
        </AppEffect>

    );
  }
}

export default WeatherIcon;
