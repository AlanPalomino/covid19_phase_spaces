import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownMSS from './components/DropdownMenu';
import ScatterPlot from './components/scatter.js';
import { covid_data_ww } from "./covid_data_ww";


//export default class App extends React.Component {
function App() {
  
  return (
    <div>
      <header className="App-header">
        <h1>Diagramas de Estados-Fase de Covid19 a Nivel Mundial </h1>
        <img src={logo} className="App-logo" alt="logo" width="250" height="270" />
      </header>
      <center> <h3>Seleccione los paises que desee visualizar. </h3> </center>
      <div>
      <DropdownMSS />
      <hr />
      </div>
      <ScatterPlot data={covid_data_ww} /> 
			<hr />

    </div>
  );
  }

export default App;
