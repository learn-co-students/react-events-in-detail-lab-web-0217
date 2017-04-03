import React from 'react'

class CoordinatesButton extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const x = event.clientX
    const y =  event.clientY
    this.props.onReceiveCoordinates([x, y])
  }
  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

module.exports = CoordinatesButton
