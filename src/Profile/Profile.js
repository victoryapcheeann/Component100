import React, { Component } from 'react';
import './Profile.css';
import AppEffect from '../AppEffect'

import Sample from './Sample/Sample'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      currentProfileComponent : Sample
    }
  }

  renderComponent = (componentProfileName) => {
      this.setState ({
        currentProfileComponent : componentProfileName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Profile</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentProfileComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Profile;
