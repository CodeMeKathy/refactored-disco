import React, { Component } from 'react'


// Old React class component setup
export class Hero extends Component {
  render() {
    return (
      
    )
  }
}

// New React => Functional Component
const Hero = props => {
  return(
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default Hero
