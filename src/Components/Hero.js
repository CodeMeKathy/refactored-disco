import React from 'react'

// React Bootstrap Imports
import NavbarCustom from './NavbarCustom'
import Container from 'react-bootstrap/Container'

const Hero = props => {
  return (
    <Container fluid className='hero-container'>
      <hr/>
      <NavbarCustom />
    </Container>
  )
}

export default Hero
