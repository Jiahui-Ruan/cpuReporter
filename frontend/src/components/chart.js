import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine,
         SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return ((_.sum(data) / data.length) * 100).toFixed(4);
}

export default (props) => {
    return (
        <div className="chart">
          <Sparklines height={120} width={180} data={props.data} min={0} max={1}>
            <SparklinesLine color={props.color} />
            <SparklinesSpots />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <h4>Average: {average(props.data)}%</h4>
        </div>
    )
}
