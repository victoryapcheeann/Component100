import React, { Component } from 'react';
import './OnClickImageGallery.css';
import AppEffect from '../../AppEffect'

class OnClickImageGallery extends Component {
  render() {
    return (
        <AppEffect classNameName="columnStyle">
        <section className='case-container' id='cases'>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-1'>
              <header>
                My project 1
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-2'>
              <header>
                My project 2
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-3'>
              <header>
                My project 3
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-4'>
              <header>
                My project 4
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-5'>
              <header>
                My project 5
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
          <label>
            <input className='hidden' name='accordionselection' type='radio'/>
            <div className='case case-6'>
              <header>
                My project 6
              </header>
              <div className='project'>
                <div className='group'>
                  <h3>Project goal:</h3>
                  <p>To develop new services for unknown business areas that ensured a brighter position on the star market.</p>
                </div>
                <div className='group'>
                  <h3>My role:</h3>
                  <p>This was my role.</p>
                </div>
              </div>
              <button>View case</button>
            </div>
          </label>
        </section>
        </AppEffect>
    );
  }
}

export default OnClickImageGallery;
