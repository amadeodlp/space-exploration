import React, {useState, useEffect} from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"
import './destination.css'
import '../navbar/navbar.css'
import { destinations } from "./destinations"
import { Navbar, Nav } from "react-bootstrap"

const DestinationNav = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
      <>
        <Navbar className='dest-nav' variant="dark">
          <Nav className='nav-links'>
            <Link to="moon" state={{ destination: destinations.moon }} className={"nav-link" + (url === "/destination/moon" ? "-pressed" : "")}>MOON</Link>
            <Link to="mars" state={{ destination: destinations.mars }} className={"nav-link" + (url === "/destination/mars" ? "-pressed" : "")}>MARS</Link>
            <Link to="europa" state={{ destination: destinations.europa }} className={"nav-link" + (url === "/destination/europa" ? "-pressed" : "")}>EUROPA</Link>
            <Link to="titan" state={{ destination: destinations.titan }} className={"nav-link" + (url === "/destination/titan" ? "-pressed" : "")}>TITAN</Link>
          </Nav>
        </Navbar>
        <Outlet/>
    </>
  )
}

export default DestinationNav