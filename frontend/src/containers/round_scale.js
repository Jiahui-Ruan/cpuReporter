import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLoad } from '../actions/index';
import Slider from '../components/slider'

class RoundScale extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.fetchLoad();
    }, 1000)
  }

  render() {
    return (
      <div>
        <h3>{this.props.load.load}</h3>
        <Slider />
      </div>
    )
  }
}

function mapStateToProps({ load }) {
  return { load };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLoad }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundScale);
