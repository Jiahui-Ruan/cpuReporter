import React, { Component } from 'react';
import RoundScale from '../containers/round_scale';
import HistoryChart from '../containers/history_chart';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"><h3>Realtime System Load</h3></div>
        <div className="row">
          <RoundScale />
        </div>
        <div className="row"><h3>System Load Since Page Open</h3></div>
        <div className="row chart">
          <HistoryChart />
        </div>
      </div>
    );
  }
}
