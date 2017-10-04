import React, { Component } from 'react'
import anime from 'animejs'
import './Logo.css'

export class Logo extends Component {

  componentDidMount() {
    anime.timeline({loop: false})
      .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: function(e, i, l) {
          var offset = -0.625 + 0.625*2*i;
          return offset + "em";
        }
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      });

  }

  render() {
    return (
      <h1 className="ml5">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters letters-left">V</span>
          <span className="letters ampersand">&amp;</span>
          <span className="letters letters-right">A</span>
          <span className="line line2"></span>
        </span>
      </h1>
    )
  }

}
