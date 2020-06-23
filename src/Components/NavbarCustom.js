import React from 'react'

// React Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Custom Imports
import logo from '../logo.svg'

const NavbarCustom = props => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />Spotify Dash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{ placeItems: "flex-end" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarCustom
