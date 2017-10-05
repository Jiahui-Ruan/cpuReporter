import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLoad } from '../actions/index';
import Slider from '../components/slider'

class RoundScale extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    setInterval(() => {
      this.props.fetchLoad();
    }, 1000)
  }

  render() {
    return (
      <div>
        <Slider load={this.props.load.load} maxLoad={1} />
        <br />
        <h4>Current: {(this.props.load.load * 100).toFixed(4)}%</h4>
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
