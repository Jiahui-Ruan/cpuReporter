import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const self = this;
    $("#slider").roundSlider({
        sliderType: "min-range",
        editableTooltip: false,
        radius: 105,
        width: 16,
        value: self.props.load / self.props.maxLoad * 100,
        handleSize: 0,
        handleShape: "square",
        circleShape: "half-top",
        tooltipFormat: "changeTooltip"
    });
  }

  render() {
    return <div id="slider" />
  }
}
