import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './Slider1.css';

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <div>
    <div offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </div>

    <div offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </div>

    <div className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </div>

    <div className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </div>
  </div>
)

class Slider1 extends Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="slider1Container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page offset={0} gradient="pink" caption="who we are" first="Lorem ipsum" second="dolor sit" onClick={() => this.scroll(1)} />
        <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
      </Parallax>
    )
  }
}

export default Slider1;
