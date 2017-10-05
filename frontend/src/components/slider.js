import React, { Component } from 'react';

export default class Slider extends Component {
  componentDidMount() {
    $("#slider").roundSlider({
        sliderType: "min-range",
        editableTooltip: false,
        radius: 105,
        width: 16,
        value: 75,
        handleSize: 0,
        handleShape: "square",
        circleShape: "pie",
        startAngle: 315,
        tooltipFormat: "changeTooltip"
    });
  }

  render() {
    return <div id="slider" />
  }
}
