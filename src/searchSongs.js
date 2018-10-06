import React from 'react';
import {songSearch} from './searchAlg';
const SearchSongs = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.searchInput.value);
    songSearch(e.target.searchInput.value, props.songsArray)
  }
  
  return (
    <form className="searchForm" onSubmit={e => handleSubmit(e)}>
      <input name="searchInput" type="text"></input>
      <button type="submit">Search!</button>
      <textarea type="text" value={props.songs} disabled/>
    </form>
  )
}

export default SearchSongs;