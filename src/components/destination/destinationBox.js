import React from 'react'
import './destination.css'

const DestinationBox = ({title, image, description, distance, time}) => {
  return (
    <div className='dest-box'>
      <div className='img-fluid'>
        <img className='img-fluid' src={image}/>
      </div>
      <div className='dest-description'>
        <h1 className='dest-name'>{title}</h1>
        <h3>{description}</h3>
        <div className='distance-and-time'>
          <h4>Avg. distance <br/><br/> {distance}</h4>
          <h5>Est. travel time <br/><br/> {time}</h5>
        </div>
      </div>
    </div>
  )
}

export default DestinationBox