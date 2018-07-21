import React, { Component } from 'react';
import './EventCard.css';
import AppEffect from '../../AppEffect'

class EventCard extends Component {
  render() {
    return (
        <AppEffect>
        <div className="card-media-container">

<div className="card-media">
 <div className="card-media-object-container">
   <div className="card-media-object card-media-image1"></div>
   <span className="card-media-object-tag subtle">Selling Fast</span>
   <ul className="card-media-object-social-list">
     <li>
       <img src="https://s10.postimg.cc/3rjjbzcvd/profile_f.jpg" className=""/>
     </li>
     <li>
       <img src="https://s16.postimg.cc/b0j0djh79/profile_0_f.jpg" className=""/>
     </li>
     <li className="card-media-object-social-list-item-additional">
       <span>+2</span>
     </li>
   </ul>
 </div>

 <div className="card-media-body">
   <div className="card-media-body-top">
     <span className="subtle">Mon, APR 09, 7:00 PM</span>
     <div className="card-media-body-top-icons u-float-right">
       <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" >
         <path d="M0 0h24v24H0z" fill="none"/>
         <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
       </svg>
       <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" >
         <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
         <path d="M0 0h24v24H0z" fill="none"/>
       </svg>
     </div>
   </div>
   <span className="card-media-body-heading">This Thing Called Life: A Celebration of Prince and His Legacy at MEZZANINE SF</span>
   <div className="card-media-body-supporting-bottom">
     <span className="card-media-body-supporting-bottom-text subtle">Mezzanine, San Francisco, CA</span>
     <span className="card-media-body-supporting-bottom-text subtle u-float-right">Free &ndash; $30</span>
   </div>
   <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
     <span className="card-media-body-supporting-bottom-text subtle">#Music #Party</span>
     <a href="#/" className="card-media-body-supporting-bottom-text card-media-link u-float-right">VIEW TICKETS</a>
   </div>
 </div>
</div>

<div className="card-media">
 <div className="card-media-object-container">
   <div className="card-media-object card-media-image2"></div>
   <ul className="card-media-object-social-list">
     <li>
       <img src="https://s13.postimg.cc/c5aoiq1w7/stock3_f.jpg" className=""/>
     </li>
   </ul>
 </div>
 <div className="card-media-body">
   <div className="card-media-body-top">
     <span className="subtle">Mon, APR 09, 7:00 PM</span>
     <div className="card-media-body-top-icons u-float-right">
       <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" >
         <path d="M0 0h24v24H0z" fill="none"/>
         <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
       </svg>
       <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" >
         <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
         <path d="M0 0h24v24H0z" fill="none"/>
       </svg>
     </div>
   </div>
   <span className="card-media-body-heading">DAY</span>
   <div className="card-media-body-supporting-bottom">
     <span className="card-media-body-supporting-bottom-text subtle">1015 Folsom, San Francisco, CA</span>
     <span className="card-media-body-supporting-bottom-text subtle u-float-right">$25 &ndash; $80</span>
   </div>
   <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
     <span className="card-media-body-supporting-bottom-text subtle">#Music #Performance</span>
     <a href="#/" className="card-media-body-supporting-bottom-text card-media-link u-float-right">VIEW TICKETS</a>
   </div>
 </div>
</div>

</div>
        </AppEffect>
    );
  }
}

export default EventCard;
