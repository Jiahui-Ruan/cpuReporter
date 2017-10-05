import React, { Component } from 'react';
import RoundScale from '../containers/round_scale';
import HistoryChart from '../containers/history_chart';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <RoundScale />
        </div>
        <div className="row">
          <HistoryChart />
        </div>
      </div>
    );
  }
}
