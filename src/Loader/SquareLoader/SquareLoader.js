import React, { Component } from 'react';
import './SquareLoader.css';
import AppEffect from '../../AppEffect'

class SquareLoader extends Component {
  render() {
    return (
        <AppEffect>
          <div className='loadingMainContainer'>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
          </div>
        </AppEffect>
    );
  }
}

export default SquareLoader;
