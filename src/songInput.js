import React from 'react';

const handleSongs = (e) => {

}
const songInput = props => {
  return <textarea className='songInput' onChange={e => props.handleSongs(e.target.value)} value={JSON.stringify(props.songs)} disabled/>
}

export default songInput;