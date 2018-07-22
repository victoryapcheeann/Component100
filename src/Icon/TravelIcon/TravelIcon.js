import React, { Component } from 'react';
import './TravelIcon.css';
import AppEffect from '../../AppEffect'

class TravelIcon extends Component {
  render() {
    return (
        <AppEffect>
        <div className="tabs">
<div className="tab">
 <div className="mountain"></div>
 <div className="mountain-large"></div>
 <div className="mountain"></div>
 <div className="clouds">
   <div className="cloud"></div>
   <div className="cloud"></div>
   <div className="cloud"></div>
   <div className="cloud"></div>
   <div className="cloud"></div>
   <div className="cloud"></div>
   <div className="cloud"></div>
 </div>
 <div className="base"></div>
</div>
<div className="tab">
 <div className="planet-sml"></div>
 <div className="planet-med"></div>
 <div className="planet-lg"></div>
 <div className="planet-ring"></div>
 <div className="moon">
   <div className="crater"></div>
   <div className="crater"></div>
   <div className="crater-lg"></div>
   <div className="crater"></div>
   <div className="crater"></div>
 </div>
</div>
<div className="tab">
 <div className="night-sky"></div>
 <div className="night-sky-2"></div>
 <div className="moon-light"></div>
 <div className="fog"></div>
 <div className="building-lvl-1"></div>
 <div className="building-lvl-1-core"></div>
 <div className="building-lvl-1-window"></div>
 <div className="building-lvl-2-divide"></div>
 <div className="building-lvl-2-core"></div>
 <div className="building-lvl-3-divide"></div>
 <div className="building-lvl-3-core"></div>
 <div className="building-lvl-roof"></div>
</div>
<div className="tab">
 <div className="building-block"></div>
 <div className="building-block-sat-dot"></div>
 <div className="building-block-sat"></div>
 <div className="building-block-window">
   <div className="cat"></div>
 </div>
 <div className="building-block-roof">
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
   <div className="building-block-roof-tile"></div>
 </div>
</div>
<div className="tab">
 <div className="sea"></div>
 <div className="sea-fore"></div>
 <div className="boat">
   <div className="boat-hull"></div>
   <div className="boat-top"></div>
 </div>
 <div className="boat-far">
   <div className="boat-mast"></div>
 </div>
</div>
</div>
        </AppEffect>
    );
  }
}

export default TravelIcon;
