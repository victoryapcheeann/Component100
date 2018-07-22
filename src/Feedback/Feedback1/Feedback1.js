import React, { Component } from 'react';
import './Feedback1.css';
import AppEffect from '../../AppEffect'

class Feedback1 extends Component {
  render() {
    return (
        <AppEffect className="flashMessageContainer">
        <ul className="flashMessageUL">
<li>
 <div className='flash success'>
   <div className='bg'>
     <div className='bg-icon'></div>
     <div className='bg-btns'></div>
   </div>
   <div className='inside'>
     <figure className='icon'>
       <svg viewBox='0 0 84 84'>
         <g fill='none'>
           <circle cx='42' cy='42' fill='#BDE3CA' r='42'></circle>
           <path d='M30,62 C33.0710678,65.0710678 37.3137085,66.9705627 42,66.9705627 C46.6862915,66.9705627 50.9289322,65.0710678 54,62' stroke-width='5' stroke='#5FB67D'></path>
           <circle cx='30' cy='42' fill='#5FB67D' r='3'></circle>
           <circle cx='54' cy='42' fill='#5FB67D' r='3'></circle>
         </g>
       </svg>
     </figure>
     <div>
       <h2>Success!</h2>
       <p>You’re all set. Want to share it with the world?</p>
     </div>
     <div className='btns'>
       <button>
         <svg viewBox='0 0 56 56'>
           <polyline fill='none' points='16 29.4852814 24.4852814 37.9705627 41.4852814 21' stroke-width='4' stroke='#5FB67D'></polyline>
         </svg>
         <span>Share</span>
       </button>
       <button>
         <svg viewBox='0 0 56 56'>
           <g fill='none' stroke-width='4' stroke='#ADBBB2'>
             <polyline points='31.5147186 19.5147186 40 28 31.5147186 36.4852814'></polyline>
             <line x1='40' x2='16' y1='28' y2='28'></line>
           </g>
         </svg>
         <span>Skip</span>
       </button>
     </div>
   </div>
 </div>
</li>
<li>
 <div className='flash working'>
   <div className='bg'>
     <div className='bg-icon'></div>
     <div className='bg-btns'></div>
   </div>
   <div className='inside'>
     <figure className='icon'>
       <svg viewBox='0 0 84 84'>
         <g fill='none'>
           <circle cx='42' cy='42' fill='#EEE5C6' r='42'></circle>
           <circle cx='42' cy='63' r='7' stroke-width='5' stroke='#E1C55E'></circle>
           <circle cx='30' cy='42' fill='#E1C55E' r='3'></circle>
           <circle cx='54' cy='42' fill='#E1C55E' r='3'></circle>
         </g>
       </svg>
     </figure>
     <div>
       <h2>Working on it!</h2>
       <p>It’s taking a little longer than normal this time.</p>
     </div>
     <div className='btns'>
       <button>
         <svg viewBox='0 0 56 56'>
           <g fill='#E1C55E'>
             <circle cx='16' cy='28' r='3'></circle>
             <circle cx='28' cy='28' r='3'></circle>
             <circle cx='40' cy='28' r='3'></circle>
           </g>
         </svg>
       </button>
     </div>
   </div>
 </div>
</li>
<li>
 <div className='flash error'>
   <div className='bg'>
     <div className='bg-icon'></div>
     <div className='bg-btns'></div>
   </div>
   <div className='inside'>
     <figure className='icon'>
       <svg viewBox='0 0 84 84'>
         <g fill='none'>
           <circle cx='42' cy='42' fill='#F4B6BA' r='42'></circle>
           <path d='M30,65 C33.0710678,61.9107443 37.3137085,60 42,60 C46.6862915,60 50.9289322,61.9107443 54,65' stroke-width='5' stroke='#C46465'></path>
           <circle cx='30' cy='45' fill='#C46465' r='3'></circle>
           <circle cx='54' cy='45' fill='#C46465' r='3'></circle>
         </g>
       </svg>
     </figure>
     <div>
       <h2>Whoops!</h2>
       <p>We were unable to complete your request.</p>
     </div>
     <div className='btns'>
       <button>
         <svg viewBox='0 0 56 56'>
           <g fill='none' stroke-width='4' stroke='#C46465'>
             <path d='M28,15 C20.8202983,15 15,20.8202983 15,28 C15,35.1797017 20.8202983,41 28,41 C35.1797017,41 41,35.1797017 41,28 C41,26.2373929 40.649213,24.5567164 40.0136429,23.0239745'></path>
             <polyline points='19.8973389 11.0570105 27.9864853 15.0023508 24.041145 23.0914972'></polyline>
           </g>
         </svg>
         <span>Try again</span>
       </button>
     </div>
   </div>
 </div>
</li>
</ul>

        </AppEffect>
    );
  }
}

export default Feedback1;
