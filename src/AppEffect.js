import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Swing from 'react-reveal/Swing';
import Tada from 'react-reveal/Tada';

var effectArray = [
  Fade, Fade, Fade, Fade, Fade, Fade, Fade, Fade, Fade, Fade, Fade,
  Jump, HeadShake, Jello, Pulse, RubberBand, Shake, Swing, Tada,
  Bounce, Slide, LightSpeed, Zoom
];

var randomNumber = Math.floor(Math.random()*effectArray.length);

var FinalEffect = effectArray[randomNumber]

var AppEffect = ({children}) => (

  <FinalEffect>
    <div>{children}</div>
  </FinalEffect>
);

export default AppEffect;
