import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top left red"></div>
        <div className="top right"><span>Dance</span></div>
        <div className="bottom left"><span>Battle</span></div>
        <div className="bottom right red"></div>
      </div>
    );
  }
}

export default App;
