import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';

var effectArray = [
  Zoom, Fade, Bounce, Slide,
  Jump, HeadShake, Jello, Pulse, RubberBand, Shake
];

var randomNumber = Math.floor(Math.random()*effectArray.length);

var FinalEffect = effectArray[randomNumber]

var AppEffect = ({children}) => (

  <FinalEffect>
    <div>{children}</div>
  </FinalEffect>
);

export default AppEffect;
