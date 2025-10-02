import React from 'react'
import './GifList.css'
import GifCard from '../GiftCard/GifCard'


function GifList({gifs}) {

  if(gifs.length === 0)
    return <p className='no-results'> no hay resultado para la busqueda</p>

  return (

    <div className='gif-list'>
      {
        gifs.map(gif => (
          <GifCard key={gif.id} gif={gif} />
        ))
      }

    </div>

  )
}

export default GifList