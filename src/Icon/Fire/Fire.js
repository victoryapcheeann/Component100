import React, { Component } from 'react';
import './Fire.css';
import AppEffect from '../../AppEffect'

class Fire extends Component {
  render() {
    return (
        <AppEffect>
          <div class="fire">
            <div class="fire-left">
             <div class="main-fire"></div>
             <div class="particle-fire"></div>
            </div>
            <div class="fire-main">
             <div class="main-fire"></div>
             <div class="particle-fire"></div>
            </div>
            <div class="fire-right">
             <div class="main-fire"></div>
             <div class="particle-fire"></div>
            </div>
            <div class="fire-bottom">
             <div class="main-fire"></div>
            </div>
          </div>
        </AppEffect>
    );
  }
}

export default Fire;
