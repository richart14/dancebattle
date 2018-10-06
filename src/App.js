import React, { Component } from 'react';
import './App.css';
import TitleSearch from './titleSearch';

class App extends Component {
  constructor() {
    super()

    this.state = {
      songs: [],
    }
  }

  handleSongs(songArray) {
    this.setState({songs: songArray})
  }
  render() {
    return (
      <div className="App">
        <div className="top left red"><TitleSearch handleSongs={this.handleSongs}/></div>
        <div className="top right"><span>Dance</span></div>
        <div className="bottom left"><span>Battle</span></div>
        <div className="bottom right red"></div>
      </div>
    );
  }
}

export default App;
