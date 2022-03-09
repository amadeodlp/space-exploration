import React from 'react'
import './home.css'
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { destinations } from "../destination/destinations"

const Presentation = () => {
  const navigate = useNavigate();
  return (
    <Container className="presentation">
      <div className='pres-text'>
        <h3>SO, YOU WANT TO TRAVEL TO </h3>
        <h1 className='title'>SPACE</h1>
        <p>Let's face it; if you want to go to space, you might as well <br/>
            genuinely go to outer space and not hover kind of on the <br/>
            edge of it. Well sit back, and relax because we'll give you <br/>
            a truly out of this world experience!
        </p>
        </div>
          <div onClick={() => navigate('/destination/moon', { state: { destination: destinations.moon } })} className='circle'>
            <h1 className='explore-text'>EXPLORE</h1>
          </div>
    </Container>
  )
}

export default Presentation