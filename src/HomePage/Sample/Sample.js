import React, { Component } from 'react';
import './Sample.css';
import AppEffect from '../../AppEffect'

class Sample extends Component {
  render() {
    return (
        <AppEffect classNameName="homePageWave">
        <div class="wrapper">
        	<div class="card">
        		<div class="card__year">
        			20<br />18
        		</div>
        		<div class="card__cometOuter">
        			<div class="card__comet"></div>
        			<div class="card__comet card__comet--second">
        			</div>
        		</div>
        		<div class="card__circle"></div>
        		<div class="card__smallCircle"></div>
        		<div class="card__orangeShine"></div>
        		<div class="card__greenShine"></div>
        		<div class="card__thankyou">
        			thank<br />you!
        		</div>
        		<div class="card__outer-year">
        			<span>2</span>
        			<span>0</span>
        			<span>1</span>
        			<span>7</span>
        		</div>
        	</div>
        </div>
        </AppEffect>
    );
  }
}

export default Sample;
