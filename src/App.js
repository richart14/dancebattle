import React, { Component } from 'react';
import './App.css';
import SongInput from './songInput';
import SearchSong from './searchSongs';

class App extends Component {
  constructor() {
    super()

    this.state = {
      songs: JSON.stringify([
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
      ]),
    }
  }

  handleSongs(songString) {
    this.setState({songs: songString})
  }
  render() {
    return (
      <div className="App">
        <div className="top left red"><SongInput handleSongs={(songString) => this.handleSongs(songString)} songs={this.state.songs}/></div>
        <div className="top right words"><span>Dance</span></div>
        <div className="bottom left words"><span>Battle</span></div>
        <div className="bottom right red"><SearchSong /></div>
      </div>
    );
  }
}

export default App;
