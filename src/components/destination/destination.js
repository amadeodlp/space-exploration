import React from 'react'
import './destination.css'
import DestinationNav from "./destinationNav"

const Destination = () => {
  return (
    <>
      <div className='destination'>
        <div className='dest-title'>01 PICK YOUR DESTINATION</div>
          <DestinationNav/>
      </div>

    </>
  )
}

export default Destination