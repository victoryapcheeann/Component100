import React, { Component } from 'react';
import './Slider.css';
import AppEffect from '../AppEffect';

import FoodSlider from './FoodSlider/FoodSlider';
import ImageGallerySlider from './ImageGallerySlider/ImageGallerySlider';
import Slider3D from './Slider3D/Slider3D';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentSliderComponent : Slider3D
    }
  }

  renderComponent = (componentSliderName) => {
      this.setState ({
        currentSliderComponent : componentSliderName
      })
  }

  render() {
    return (
      <AppEffect>
        <div className="columnStyle">
          <span>Slider</span>
          <div className="rowStyle subComponentButtonContainer">
            <button className='appButtonStyle' onClick={() => this.renderComponent(FoodSlider)}>Food Slider</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(ImageGallerySlider)}>Image Gallery</button>
            <button className='appButtonStyle' onClick={() => this.renderComponent(Slider3D)}>3D Slider</button>
          </div>
          <this.state.currentSliderComponent />
        </div>
      </AppEffect>
    );
  }
}

export default Slider;
