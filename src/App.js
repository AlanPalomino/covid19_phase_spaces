import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownMSS from './components/DropdownMenu'
import Plot from './components/Ploter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diagramas de Estados-Fase de Covid19 a Nivel Mundial </h1>
        <img src={logo} className="App-logo" alt="logo" width="250" height="270" />
      </header>
      <h3>Seleccione los paises que desee visualizar. </h3>
      <div>
      <DropdownMSS />
      </div>
      <div>
        <Plot/>
      </div>
      
    </div>
  );
}

export default App;
