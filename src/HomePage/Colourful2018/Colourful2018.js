import React, { Component } from 'react';
import './Colourful2018.css';
import AppEffect from '../../AppEffect'

class Colourful2018 extends Component {
  render() {
    return (
        <AppEffect className="homePage2018">
        <div className="homePage2018Wrapper">
        	<div className="homePage2018Card">
        		<div className="card__year">
        			20<br />18
        		</div>
        		<div className="card__cometOuter">
        			<div className="card__comet"></div>
        			<div className="card__comet card__comet--second">
        			</div>
        		</div>
        		<div className="card__circle"></div>
        		<div className="card__smallCircle"></div>
        		<div className="card__orangeShine"></div>
        		<div className="card__greenShine"></div>
        		<div className="card__thankyou">
        			thank<br />you!
        		</div>
        		<div className="card__outer-year">
        			<span>2</span>
        			<span>0</span>
        			<span>1</span>
        			<span>8</span>
        		</div>
        	</div>
        </div>
        </AppEffect>
    );
  }
}

export default Colourful2018;
