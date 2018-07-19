import React, { Component } from 'react';
import './Background.css';
import AppEffect from '../AppEffect'

class Background extends Component {
  render() {
    return (
      <AppEffect>
        <div className="Background">
          <header className="Background-header">
            <h1 className="Background-title">Welcome to React</h1>
          </header>
          <p className="Background-intro">
            To get started, edit <code>src/Background.js</code> and save to reload.
          </p>
        </div>
      </AppEffect>
    );
  }
}

export default Background;
