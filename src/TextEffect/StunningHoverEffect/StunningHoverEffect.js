import React, { Component } from 'react';
import './StunningHoverEffect.css';
import AppEffect from '../../AppEffect'

class StunningHoverEffect extends Component {
  render() {
    return (
        <div className="stunningHoverContainer">
        <AppEffect>
          <section className="p10">
          <a >camera</a>
          </section>
          <section className="p11">
          <a >
            ROAD
          </a>

          </section>
          <section className="p12">
          <a   data-content="peak">peak</a>

          </section>

          <section className="p14">
          <a >
            eclipse
          </a>

          </section>
          <section className="p15">
          <a >tAiPeI
            <div className="t1">
              <div className="in"></div>
            </div>
            <div className="t2">
              <div className="in"></div>
            </div>
          </a>
          </section>
          <section className="p16">
          <a >CHICAGO</a>
          </section>
          <section className="p17">
          <a >sunbeams</a>
          </section>
          <section className="p18">
          <a >
          HUMMINGBIRD</a>
          </section>
          <section className="p19">
          <a >SABER
            <div className="s1"></div>
            <div className="s2"></div>
          </a>
          </section>
        </AppEffect>
        </div>
    );
  }
}

export default StunningHoverEffect;
