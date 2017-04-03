import React from 'react'

class CoordinatesButton extends React.Component {
  constructor() {
    super()
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return(
      <button onClick={this.buttonClick}>Test Yo</button>
    )
  }
}

module.exports = CoordinatesButton
