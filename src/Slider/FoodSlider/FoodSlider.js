import React, { Component } from 'react';
import './FoodSlider.css';
import AppEffect from '../../AppEffect'

class FoodSlider extends Component {
  render() {
    return (
      <div className = "slider1Container">
        <AppEffect>
        <body className="imageSliderBody">
        	<div className='csslider1 autoplay '>
        		<input name="cs_anchor1" id='cs_slide1_0' type="radio" className='cs_anchor slide' />
        		<input name="cs_anchor1" id='cs_slide1_1' type="radio" className='cs_anchor slide' />
        		<input name="cs_anchor1" id='cs_slide1_2' type="radio" className='cs_anchor slide' />
        		<input name="cs_anchor1" id='cs_play1' type="radio" className='cs_anchor' defaultChecked="true"/>
        		<input name="cs_anchor1" id='cs_pause1' type="radio" className='cs_anchor' />
        		<ul>
        			<div className="imgContainerStyle">
        				<img src="http://cssslider.com/sliders/pen/images/buns.jpg" className='imgSliderStyle'/>
        			</div>
        			<li className='num0 img'>
        				 <a href="http://cssslider.com" target=""><img src='http://cssslider.com/sliders/pen/images/buns.jpg' alt='Buns' title='Buns' /> </a>
        			</li>
        			<li className='num1 img'>
        				 <a href="http://cssslider.com" target=""><img src='http://cssslider.com/sliders/pen/images/buns.jpg' alt='Croissant' title='Croissant' /> </a>
        			</li>
        			<li className='num2 img'>
        				 <a href="http://cssslider.com" target=""><img src='http://cssslider.com/sliders/pen/images/buns.jpg' alt='Lemon pie' title='Lemon pie' /> </a>
        			</li>

        		</ul>
        		<div className='cs_description'>
        			<label className='num0'>
        				<span className="cs_title"><span className="cs_wrapper">Buns</span></span>
        			</label>
        			<label className='num1'>
        				<span className="cs_title"><span className="cs_wrapper">Croissant</span></span>
        			</label>
        			<label className='num2'>
        				<span className="cs_title"><span className="cs_wrapper">Lemon pie</span></span>
        			</label>
        		</div>

        		<div className='cs_bullets'>
        			<label className='num0' for='cs_slide1_0'>
        				<span className='cs_point'></span>
        				<span className='cs_thumb'><img src='http://cssslider.com/sliders/pen/tooltips/buns.jpg' alt='Buns' title='Buns' /></span>
        			</label>
        			<label className='num1' for='cs_slide1_1'>
        				<span className='cs_point'></span>
        				<span className='cs_thumb'><img src='http://cssslider.com/sliders/pen/tooltips/croissant.jpg' alt='Croissant' title='Croissant' /></span>
        			</label>
        			<label className='num2' for='cs_slide1_2'>
        				<span className='cs_point'></span>
        				<span className='cs_thumb'><img src='http://cssslider.com/sliders/pen/tooltips/lemonpie.jpg' alt='Lemon pie' title='Lemon pie' /></span>
        			</label>
        		</div>
        		</div>
          <br /><br />
          </body>
        </AppEffect>
        </div>
    );
  }
}

export default FoodSlider;
