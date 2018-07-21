import React, { Component } from 'react';
import './ButtonHoverDraw.css';
import AppEffect from '../../AppEffect'

class ButtonHoverDraw extends Component {
  render() {
    return (
        <AppEffect>
          <section className="portfolio-experiment">
            <a>
              <span className="buttonHoverText">Hover me</span>
              <span className="buttonHoverLine -right"></span>
              <span className="buttonHoverLine -top"></span>
              <span className="buttonHoverLine -left"></span>
              <span className="buttonHoverLine -bottom"></span>
            </a>
          </section>
        </AppEffect>
    );
  }
}

export default ButtonHoverDraw;
