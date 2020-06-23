import React from 'react'

// React Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar'

// Custom Imports
import logo from '../logo.svg'

const NavbarCustom = props => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          Spotify Dash
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default NavbarCustom
