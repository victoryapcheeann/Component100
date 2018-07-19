import React, { Component } from 'react';
import './Loader.css';
import AppEffect from '../AppEffect'

class Loader extends Component {
  render() {
    return (
      <AppEffect>
        <div> 
          Loader
        </div>
      </AppEffect>
    );
  }
}

export default Loader;
