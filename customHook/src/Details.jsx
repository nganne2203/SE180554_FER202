import React from 'react'

function Details( {art}) {
  return (
    <div>
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
          <h2><span>{art.artName}</span></h2>
        <p>Price: <span>${art.price}</span></p>
        <p>Description: <span>{art.description}</span></p>
        <img src={art.image} alt={art.title} style={{ width: '100px', height: 'auto' }} />
        <p>Brand: <span>{art.brand}</span></p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
          <h2>Related Artworks</h2>
          {/* Render related artworks here */}
        </div>
    </div>

  )
}

export default Details