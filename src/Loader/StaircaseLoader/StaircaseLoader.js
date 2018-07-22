import React, { Component } from 'react';
import './StaircaseLoader.css';
import AppEffect from '../../AppEffect'

class StaircaseLoader extends Component {
  render() {
    return (
      <div className="staircaseLoaderContainer">
        <AppEffect>
          <div className="staircaseLoader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </AppEffect>
      </div>
    );
  }
}

export default StaircaseLoader;
