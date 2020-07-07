import React, {Component} from 'react';
import { Scatter } from 'react-chartjs-2';

const data_config = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Country dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 5,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};

export default class ScatterPlot extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Scatter ref="chart" data={data_config} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}