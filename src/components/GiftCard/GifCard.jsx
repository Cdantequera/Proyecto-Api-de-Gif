import React from 'react'
import './GifCard.css'

function GifCard({gif}) {

  return (

    <div className='gif-card'>
      <img src={gif.images.downsized.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
    

  )
}

export default GifCard