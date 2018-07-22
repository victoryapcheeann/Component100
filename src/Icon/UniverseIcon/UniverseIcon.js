import React, { Component } from 'react';
import './UniverseIcon.css';
import AppEffect from '../../AppEffect'

class UniverseIcon extends Component {
  render() {
    return (
        <AppEffect>
        <div className="universe">
          <div className="universe__part">
           <div className="universe__planet"></div>
           <div className="universe__rock"></div>
           <div className="universe__rock"></div>
           <div className="universe__satellite">
             <div className="universe__satellite-slice"></div>
           </div>
           <div className="universe__ufo">
             <div className="universe__ufo-light"></div>
           </div>
          </div>
          <div className="universe__part">
           <div className="universe__clouds">
             <div className="universe__cloud"></div>
             <div className="universe__cloud"></div>
             <div className="universe__cloud"></div>
           </div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__planet">
             <div className="universe__planet-core"></div>
             <div className="universe__planet-slice"></div>
             <div className="universe__planet-atmospheric"></div>
           </div>
           <div className="universe__satellite"></div>
          </div>
          <div className="universe__part">
           <div className="universe__bubble"></div>
           <div className="universe__bubble"></div>
           <div className="universe__bubble"></div>
           <div className="universe__bubble"></div>
           <div className="universe__bubble"></div>
           <div className="universe__bubble"></div>
           <div className="universe__planet"></div>
           <div className="universe__hills"></div>
           <div className="universe__rocket">
             <div className="universe__rocket-window"></div>
             <div className="universe__rocket-light"></div>
           </div>
           <div className="universe__sattelite"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
           <div className="universe__star"></div>
          </div>
          </div>
        </AppEffect>
    );
  }
}

export default UniverseIcon;
