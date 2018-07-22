import React, { Component } from 'react';
import './GlowingLoader.css';
import AppEffect from '../../AppEffect'

class GlowingLoader extends Component {
  render() {
    return (
      <div className = "glowingContainer">
        <AppEffect>

<div className="glowingLoaderContainer"></div>
<div className="particles">

 <div className="rotate">

     <div className="angle">
         <div className="size">
             <div className="position">
                 <div className="pulse">
                     <div className="particle">

                     </div>
                 </div>
             </div>
         </div>
     </div>


     <div className="angle">
         <div className="size">
             <div className="position">
                 <div className="pulse">
                     <div className="particle">

                     </div>
                 </div>
             </div>
         </div>
     </div>

     <div className="angle">
         <div className="size">
             <div className="position">
                 <div className="pulse">
                     <div className="particle">

                     </div>
                 </div>
             </div>
         </div>
     </div>

 </div>

</div>
        </AppEffect>
        </div>
    );
  }
}

export default GlowingLoader;
