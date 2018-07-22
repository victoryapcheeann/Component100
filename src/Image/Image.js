import React, { Component } from 'react';
import './Image.css';
import AppEffect from '../AppEffect'

import ImageHoverEffect1 from './ImageHoverEffect1/ImageHoverEffect1'
import ImageHoverEffect2 from './ImageHoverEffect2/ImageHoverEffect2'
import OnClickImageGallery from './OnClickImageGallery/OnClickImageGallery'
import Sample from './Sample/Sample'

class Image extends Component {
  constructor() {
    super();
    this.state = {
      currentImageComponent : ImageHoverEffect1
    }
  }

  renderComponent = (componentImageName) => {
      this.setState ({
        currentImageComponent : componentImageName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Image</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(ImageHoverEffect1)}>Image Hover Effect 1</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ImageHoverEffect2)}>Image Hover Effect 2</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(OnClickImageGallery)}>Image Gallery On Click</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Sample)}>Sample</button>
          </div>
          <this.state.currentImageComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Image;
