import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownMSS from './components/DropdownMenu';
import ScatterExample from './components/scatter.js';
import { covid_data_ww } from "./covid_data_ww";


export default class App extends React.Component {
//function App() {
  render(){
  return (
    <div>
      <header className="App-header">
        <h1>Diagramas de Estados-Fase de Covid19 a Nivel Mundial </h1>
        <img src={logo} className="App-logo" alt="logo" width="250" height="270" />
      </header>
      <h3>Seleccione los paises que desee visualizar. </h3>
      <div>
      <DropdownMSS />
      <hr />
      </div>
      
				<ScatterExample data={covid_data_ww}/> 
			<hr />

    </div>
  );
  }
}
//export default App;
