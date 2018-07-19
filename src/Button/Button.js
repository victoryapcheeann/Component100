import React, { Component } from 'react';
import './Button.css';
import AppEffect from '../AppEffect'

class Button extends Component {
  render() {
    return (
      <AppEffect>
        <div className="Button">
          <header className="Button-header">
            <h1 className="Button-title">Welcome to React</h1>
          </header>
          <p className="Button-intro">
            To get started, edit <code>src/Button.js</code> and save to reload.
          </p>
        </div>
      </AppEffect>
    );
  }
}

export default Button;
