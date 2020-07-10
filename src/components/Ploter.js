import React, {Component} from 'react';
import {Chart} from 'react-chartjs-2';


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx,{
    type: 'line',
    data:{
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets:[{
            label: 'Manzanas',
            data:[12, 19, 3, 17, 6, 3, 7],
            backgroundColor:'rgba(153,255,51,0.6)'
        },{
            label:'Naranjas',
            data:[2, 29, 5, 5, 2, 3, 10],
            backgroundColor:"rgba(255,153,0,0.6)"
        }]
    },
});

export default class Plot extends Component {
    render() {
      return (
        <div>
          <h2>Espacio-Fase de Incidencias</h2>
          <myChart />
        </div>
      );
    }
  
    componentDidMount() {
      const { datasets } = this.refs.chart.chartInstance.data
      console.log(datasets[0].data);
    }
  }
