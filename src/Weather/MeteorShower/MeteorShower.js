import React, { Component } from 'react';
import './MeteorShower.css';
import AppEffect from '../../AppEffect'

class MeteorShower extends Component {
  render() {
    return (
      <div className="weatherMeteorShower">
        <AppEffect>
        <div id="wrap">
          <div id="moon"></div>
          <div id="stars">
            <div className="star">
              <div className="star-head"></div>
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-head"></div>
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-head"></div>
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-head"></div>
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-head"></div>
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-trail"></div>
            </div>

            <div className="star">
              <div className="star-trail"></div>
            </div>
          </div>
        </div>
        </AppEffect>
        </div>
    );
  }
}

export default MeteorShower;
