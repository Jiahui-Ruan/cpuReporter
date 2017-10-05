import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const self = this;
    $("#slider").roundSlider({
        sliderType: "min-range",
        showTooltip: false,
        readOnly: false,
        radius: 105,
        width: 16,
        value: self.props.load * 100,
        handleSize: 0,
        circleShape: "half-top",
        max: self.props.maxLoad * 100
    });
  }

  render() {
    return <div id="slider" />
  }
}
