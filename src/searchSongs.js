import React from 'react';

const SearchSongs = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.searchInput.value);
  }
  return (
    <form className="searchForm" onSubmit={e => handleSubmit(e)}>
      <input name="searchInput" type="text"></input>
      <button type="submit">Search!</button>
    </form>
  )
}

export default SearchSongs;