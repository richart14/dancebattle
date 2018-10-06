import React from 'react';

const handleSongs = (e) => {

}
const songInput = props => {
  return <textarea className='songInput' nChange={e => props.handleSongs(e.target.value)} value={JSON.stringify(props.songs)} />
}

export default songInput;