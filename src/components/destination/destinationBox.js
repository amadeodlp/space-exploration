import React from 'react'
import { Container } from "react-bootstrap"
import './destination.css'

const DestinationBox = ({name, image, description, distance, time}) => {
  return (
    <Container className='dest-box'>
      <div>
        <img className='img-fluid' src={image}/>
      </div>
      <div className='dest-description'>
        <h1 className='dest-name'>{name}</h1>
        <h3>{description}</h3>
        <div className='distance-and-time'>
          <h4>Avg. distance <br/><br/> {distance}</h4>
          <h5>Est. travel time <br/><br/> {time}</h5>
        </div>
      </div>
    </Container>
  )
}

export default DestinationBox