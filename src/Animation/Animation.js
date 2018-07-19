import React, { Component } from 'react';
import './Animation.css';
import AppEffect from '../AppEffect'

class Animation extends Component {
  render() {
    return (
      <AppEffect>
        <div className="Animation">
          <header className="Animation-header">
            <h1 className="Animation-title">Welcome to React</h1>
          </header>
          <p className="Animation-intro">
            To get started, edit <code>src/Animation.js</code> and save to reload.
          </p>
        </div>
      </AppEffect>
    );
  }
}

export default Animation;
