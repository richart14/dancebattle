import React, { Component } from 'react';
import './App.css';
import SongInput from './songInput';

class App extends Component {
  constructor() {
    super()

    this.state = {
      songs: [
        {
          artist: "Maroon 5 Featuring Cardi B",
          title: "Girls Like You",
          duration:"3:35"
        },
        {
          artist: "Juice WRLD",
          title: "Lucid Dreams",
          duration:"4:00"
        },
        {
          artist: "Post Malone",
          title: "Better Now",
          duration:"3:50"
        },
        {
          artist: "Drake",
          title: "In My Feelings",
          duration:"3:37"
        },
        {
          artist: "Eminem",
          title: "KillShot",
          duration:"4:13"
        }
      ],
    }
  }

  handleSongs(songArray) {
    // this.setState({songs: songArray})
    console.log(songArray)
  }
  render() {
    return (
      <div className="App">
        <div className="top left red"><SongInput handleSongs={this.handleSongs} songs={this.state.songs}/></div>
        <div className="top right"><span>Dance</span></div>
        <div className="bottom left"><span>Battle</span></div>
        <div className="bottom right red"></div>
      </div>
    );
  }
}

export default App;
