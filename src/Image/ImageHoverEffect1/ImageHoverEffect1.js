import React, { Component } from 'react';
import './ImageHoverEffect1.css';
import AppEffect from '../../AppEffect'

class ImageHoverEffect1 extends Component {
  render() {
    return (
        <AppEffect>
        <div className="hoverImgContainer1">
   <div className="content">
     <h2>Lily</h2>
     <div className="hoverImgGrid">
       <figure className="effect-lily">
         <img src="hoverImg/12.jpg" alt="img12"/>
         <figcaption>
           <div>
             <h2>Nice <span>Lily</span></h2>
             <p>Lily likes to play with crayons and pencils</p>
           </div>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-lily">
         <img src="hoverImg/1.jpg" alt="img1"/>
         <figcaption>
           <div>
             <h2>Nice <span>Lily</span></h2>
             <p>Lily likes to play with crayons and pencils</p>
           </div>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Sadie</h2>
     <div className="hoverImgGrid">
       <figure className="effect-sadie">
         <img src="hoverImg/2.jpg" alt="img02"/>
         <figcaption>
           <h2>Holy <span>Sadie</span></h2>
           <p>Sadie never took her eyes off me. <br/>She had a dark soul.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-sadie">
         <img src="hoverImg/14.jpg" alt="img14"/>
         <figcaption>
           <h2>Holy <span>Sadie</span></h2>
           <p>Sadie never took her eyes off me. <br/>She had a dark soul.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Honey</h2>
     <div className="hoverImgGrid">
       <figure className="effect-honey">
         <img src="hoverImg/4.jpg" alt="img04"/>
         <figcaption>
           <h2>Dreamy <span>Honey</span> <i>Now</i></h2>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-honey">
         <img src="hoverImg/5.jpg" alt="img05"/>
         <figcaption>
           <h2>Dreamy <span>Honey</span> <i>Now</i></h2>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Layla</h2>
     <div className="hoverImgGrid">
       <figure className="effect-layla">
         <img src="hoverImg/6.jpg" alt="img06"/>
         <figcaption>
           <h2>Crazy <span>Layla</span></h2>
           <p>When Layla appears, she brings an eternal summer along.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-layla">
         <img src="hoverImg/3.jpg" alt="img03"/>
         <figcaption>
           <h2>Crazy <span>Layla</span></h2>
           <p>When Layla appears, she brings an eternal summer along.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Zoe</h2>
     <div className="hoverImgGrid">
       <figure className="effect-zoe">
         <img src="hoverImg/25.jpg" alt="img25"/>
         <figcaption>
           <h2>Creative <span>Zoe</span></h2>
           <p className="icon-links">
             <a href="#"><span className="icon-heart"></span></a>
             <a href="#"><span className="icon-eye"></span></a>
             <a href="#"><span className="icon-paper-clip"></span></a>
           </p>
           <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
         </figcaption>
       </figure>
       <figure className="effect-zoe">
         <img src="hoverImg/26.jpg" alt="img26"/>
         <figcaption>
           <h2>Creative <span>Zoe</span></h2>
           <p className="icon-links">
             <a href="#"><span className="icon-heart"></span></a>
             <a href="#"><span className="icon-eye"></span></a>
             <a href="#"><span className="icon-paper-clip"></span></a>
           </p>
           <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
         </figcaption>
       </figure>
     </div>
     <h2>Oscar</h2>
     <div className="hoverImgGrid">
       <figure className="effect-oscar">
         <img src="hoverImg/9.jpg" alt="img09"/>
         <figcaption>
           <h2>Warm <span>Oscar</span></h2>
           <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-oscar">
         <img src="hoverImg/10.jpg" alt="img10"/>
         <figcaption>
           <h2>Warm <span>Oscar</span></h2>
           <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Marley</h2>
     <div className="hoverImgGrid">
       <figure className="effect-marley">
         <img src="hoverImg/11.jpg" alt="img11"/>
         <figcaption>
           <h2>Sweet <span>Marley</span></h2>
           <p>Marley tried to convince her but she was not interested.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-marley">
         <img src="hoverImg/12.jpg" alt="img12"/>
         <figcaption>
           <h2>Sweet <span>Marley</span></h2>
           <p>Marley tried to convince her but she was not interested.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Ruby</h2>
     <div className="hoverImgGrid">
       <figure className="effect-ruby">
         <img src="hoverImg/13.jpg" alt="img13"/>
         <figcaption>
           <h2>Glowing <span>Ruby</span></h2>
           <p>Ruby did not need any help. Everybody knew that.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-ruby">
         <img src="hoverImg/14.jpg" alt="img14"/>
         <figcaption>
           <h2>Glowing <span>Ruby</span></h2>
           <p>Ruby did not need any help. Everybody knew that.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Roxy</h2>
     <div className="hoverImgGrid">
       <figure className="effect-roxy">
         <img src="hoverImg/15.jpg" alt="img15"/>
         <figcaption>
           <h2>Charming <span>Roxy</span></h2>
           <p>Roxy was my best friend. She'd cross any border for me.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-roxy">
         <img src="hoverImg/1.jpg" alt="img01"/>
         <figcaption>
           <h2>Charming <span>Roxy</span></h2>
           <p>Roxy was my best friend. She'd cross any border for me.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Bubba</h2>
     <div className="hoverImgGrid">
       <figure className="effect-bubba">
         <img src="hoverImg/2.jpg" alt="img02"/>
         <figcaption>
           <h2>Fresh <span>Bubba</span></h2>
           <p>Bubba likes to appear out of thin air.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-bubba">
         <img src="hoverImg/16.jpg" alt="img16"/>
         <figcaption>
           <h2>Fresh <span>Bubba</span></h2>
           <p>Bubba likes to appear out of thin air.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Romeo</h2>
     <div className="hoverImgGrid">
       <figure className="effect-romeo">
         <img src="hoverImg/17.jpg" alt="img17"/>
         <figcaption>
           <h2>Wild <span>Romeo</span></h2>
           <p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-romeo">
         <img src="hoverImg/18.jpg" alt="img18"/>
         <figcaption>
           <h2>Wild <span>Romeo</span></h2>
           <p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Dexter</h2>
     <div className="hoverImgGrid">
       <figure className="effect-dexter">
         <img src="hoverImg/19.jpg" alt="img19"/>
         <figcaption>
           <h2>Strange <span>Dexter</span></h2>
           <p>Dexter had his own strange way. You could watch him training ants.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-dexter">
         <img src="hoverImg/12.jpg" alt="img12"/>
         <figcaption>
           <h2>Strange <span>Dexter</span></h2>
           <p>Dexter had his own strange way. You could watch him training ants.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Sarah</h2>
     <div className="hoverImgGrid">
       <figure className="effect-sarah">
         <img src="hoverImg/13.jpg" alt="img13"/>
         <figcaption>
           <h2>Free <span>Sarah</span></h2>
           <p>Sarah likes to watch clouds. She's quite depressed.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-sarah">
         <img src="hoverImg/20.jpg" alt="img20"/>
         <figcaption>
           <h2>Free <span>Sarah</span></h2>
           <p>Sarah likes to watch clouds. She's quite depressed.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Chico</h2>
     <div className="hoverImgGrid">
       <figure className="effect-chico">
         <img src="hoverImg/15.jpg" alt="img15"/>
         <figcaption>
           <h2>Silly <span>Chico</span></h2>
           <p>Chico's main fear was missing the morning bus.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-chico">
         <img src="hoverImg/4.jpg" alt="img04"/>
         <figcaption>
           <h2>Silly <span>Chico</span></h2>
           <p>Chico's main fear was missing the morning bus.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
     <h2>Milo</h2>
     <div className="hoverImgGrid">
       <figure className="effect-milo">
         <img src="hoverImg/11.jpg" alt="img11"/>
         <figcaption>
           <h2>Faithful <span>Milo</span></h2>
           <p>Milo went to the woods. He took a fun ride and never came back.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
       <figure className="effect-milo">
         <img src="hoverImg/3.jpg" alt="img03"/>
         <figcaption>
           <h2>Faithful <span>Milo</span></h2>
           <p>Milo went to the woods. He took a fun ride and never came back.</p>
           <a href="#">View more</a>
         </figcaption>
       </figure>
     </div>
   </div>
 </div>
        </AppEffect>
    );
  }
}

export default ImageHoverEffect1;
