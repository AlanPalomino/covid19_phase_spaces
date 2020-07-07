import React, {Component} from 'react';
import { Scatter } from 'react-chartjs-2';
import { Dropdown } from 'semantic-ui-react';
import {covid_data_ww} from '../covid_data_ww.js';


/*console.log(Object.keys(covid_data_ww))*/
const countryOptions = Object.keys(covid_data_ww).map( (country) => ({
  key: country,
  text: country,
  value: country,
}))

const datalabel = Object.keys(covid_data_ww).map( (country) => ({
    key: country,
    text: country,
    value: country,
  }))
  
  const dataval = Object.values(covid_data_ww).map( row => ({
    "x": row["Tasa_Incid"], "y": row["r(t)_casos"],
  }))

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

const handleChange = (e, { value }) => {
    console.log(value);
    forEach((value) => {
        addData(Scatter,label=country,data= Object.values(covid_data_ww).map( row => ({
            "x": row["Tasa_Incid"], "y": row["r(t)_casos"],
          })))
  });
var DropdownMSS = () => (
  <Dropdown
    placeholder='Seleccione los paises'
    fluid
    multiple
    search
    selection
    onChange={handleChange.bind(this)}
    options={countryOptions}
  />
)

const data_config = {
    labels: ['Scatter'],
    datasets: [
      {
        label: datalabel[0],
        fill: false,
        showLine: true,  
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
        data:  dataval
      }
    ],
    options: {
        scales:{
            xAxes: [{type: 'logarithmic'}],
            yAxes: [{type: 'logarithmic'}]
        }
    }
  };
  
  export  class ScatterPlot extends Component {
    render() {
      return (
        <div>
          <h2>Espacio-Fase de Incidencias</h2>
          <DropdownMSS/>
          <Scatter ref="chart" data={data_config} />
        </div>
      );
    }
  
    componentDidMount() {
      const { datasets } = this.refs.chart.chartInstance.data
      console.log(datasets[0].data);
    }
  }
