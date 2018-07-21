import React, { Component } from 'react';
import './BorderAnimation.css';
import AppEffect from '../../AppEffect'

class Sample extends Component {
  render() {
    return (
        <AppEffect>
        <div className="mainBorderAnimationContainer">
         <section className="borderAnimationSection demo-1">
             <div className="borderAnimationGrid">
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>D</h3>
                     <span>2012</span>
                     <span>Broccoli, Asparagus, Curry</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>A</h3>
                     <span>2013</span>
                     <span>Arugula, Chickweed</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>S</h3>
                     <span>2014</span>
                     <span>Strawberry, Lemon</span>
                 </div>
             </div>
         </section>
         <section className="borderAnimationSection demo-2">
             <h2>Color animation</h2>
             <div className="borderAnimationGrid">
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>J</h3>
                     <span>2012</span>
                     <span>Walnut, Pineapple</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>I</h3>
                     <span>2013</span>
                     <span>Curry, Beancurd</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>C</h3>
                     <span>2014</span>
                     <span>Lettuce, Asparagus</span>
                 </div>
             </div>
         </section>
         <section className="borderAnimationSection demo-3">
             <h2>Frame</h2>
             <div className="borderAnimationGrid">
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>B</h3>
                     <span>2012</span>
                     <span>Marmalade, Honey</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>U</h3>
                     <span>2013</span>
                     <span>Beans, Chickweed</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>Q</h3>
                     <span>2014</span>
                     <span>Broccoli, Lettuce</span>
                 </div>
             </div>
         </section>
         <section className="borderAnimationSection demo-4">
             <h2>Border spin</h2>
             <div className="borderAnimationGrid">
                 <div className="borderAnimationBox">
                     <svg  width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>C</h3>
                     <span>2012</span>
                     <span>Berry, Spinach</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>A</h3>
                     <span>2013</span>
                     <span>Arugula, Chickweed</span>
                 </div>
                 <div className="borderAnimationBox">
                     <svg width="100%" height="100%">
                         <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                         <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                         <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                         <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
                     </svg>
                     <h3>J</h3>
                     <span>2014</span>
                     <span>Broccoli, Asparagus, Lettuce</span>
                 </div>
             </div>
         </section>
     </div>
        </AppEffect>
    );
  }
}

export default Sample;
