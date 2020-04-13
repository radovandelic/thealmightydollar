import React from 'react';
import recordVisit from "./containers/recordVisit"
import logo from './logo.svg';
import './App.css';

function App() {
  recordVisit("index")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Placeholder
      </header>
    </div>
  );
}

export default App;
