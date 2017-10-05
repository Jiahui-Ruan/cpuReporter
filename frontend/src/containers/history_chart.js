import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class HistoryChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Chart data={this.props.history} color="black" maxLoad={this.props.maxLoad}/>
    )
  }
}

function mapStateToProps({ history, maxLoad }) {
  return { history, maxLoad };
}

export default connect(mapStateToProps)(HistoryChart);
