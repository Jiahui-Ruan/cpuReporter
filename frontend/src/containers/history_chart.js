import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class HistoryChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Chart data={this.props.history.history} color="black" units="%" />
    )
  }
}

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps)(HistoryChart);
