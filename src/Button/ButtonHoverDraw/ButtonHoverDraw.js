import React, { Component } from 'react';
import './ButtonHoverDraw.css';

class buttonHoverDraw extends Component {
  render() {
    return (
        <div>
          <section className="portfolio-experiment">
            <a>
              <span className="text">Hover me</span>
              <span className="line -right"></span>
              <span className="line -top"></span>
              <span className="line -left"></span>
              <span className="line -bottom"></span>
            </a>
          </section>
        </div>
    );
  }
}

export default buttonHoverDraw;
