import React, {useState, useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/shared/logo.svg'
import { Navbar, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { destinations } from "../destination/destinations"

const Navigation = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
      <Navbar expand="md" fixed="top" className='nav' variant="dark">
          <Navbar.Brand href="/" className='brand'><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav-links'>
              <Link to="/" className={"nav-link" + (url === "/" ? "-pressed" : "")}>00 HOME</Link>
              <Link to="/destination/moon" state={{ destination: destinations.moon }} className={"nav-link" + (url === "/destination/moon" ? "-pressed" : "")}>02 DESTINATION</Link>
              <Link to="/crew" className={"nav-link" + (url === "/crew" ? "-pressed" : "")}>01 CREW</Link>
              <Link to="/technology" className={"nav-link" + (url === "/technology" ? "-pressed" : "")}>03 TECHNOLOGY</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation