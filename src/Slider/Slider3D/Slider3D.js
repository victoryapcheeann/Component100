import React, { Component } from 'react';
import './Slider3D.css';
import AppEffect from '../../AppEffect'

class Slider3D extends Component {
  render() {
    return (
        <AppEffect>
        <section id="slideshow">
        			<div className="entire-content">
        				<div className="content-carrousel">
        					<figure className="shadow"><img src="https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/131046/pexels-photo-131046.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/302515/pexels-photo-302515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        					<figure className="shadow"><img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
        		</div>
        	</div>
        </section>
        </AppEffect>
    );
  }
}

export default Slider3D;
