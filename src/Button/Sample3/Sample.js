import React, { Component } from 'react';
import './Sample.css';
import AppEffect from '../../AppEffect'

class Sample extends Component {
  render() {
    return (
        <AppEffect>
          <div className="sampleContainer">
           Sample
          </div>
        </AppEffect>
    );
  }
}

export default Sample;
