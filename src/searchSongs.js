import React from 'react';
import {songSearch} from './searchAlg';
const SearchSongs = props => {
  const handleSubmit = e => {
    e.preventDefault();
    let searchResults = songSearch(e.target.searchInput.value, props.songsArray)
    if (e.target.searchInput.value.length < 3) {
      props.handleSearch('Need more than 2 characters!');
    } else {
      props.handleSearch(JSON.stringify(searchResults));
    }
  }

  return (
    <form className="searchForm" onSubmit={e => handleSubmit(e)}>
      <input className="searchInput" name="searchInput" type="text"></input>
      <button type="submit">Search!</button>
      <textarea type="text" value={props.songs} disabled/>
    </form>
  )
}

export default SearchSongs;