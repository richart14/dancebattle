import React from 'react';


const songInput = props => {
  const handleChange = (e) => {
    props.handleSongs(e.target.value);
  }
  return (
    <textarea 
      className='songInput' 
      onChange={e => handleChange(e)} 
      value={props.songs}
      disabled
    />
  )
}

export default songInput;