import React from 'react'
import DestinationBox from "./destinationBox"
import { useLocation } from 'react-router-dom'

const DestinationDetail = () => {
  const location = useLocation()
  const { destination } = location.state
  return (
    <DestinationBox
        name={destination.name}
        image={destination.image}
        description={destination.description}
        distance={destination.distance}
        time={destination.time}
    />
  )
}

export default DestinationDetail