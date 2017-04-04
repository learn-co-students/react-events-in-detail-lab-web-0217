import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }
  render() {
    return (
      <button onClick={this.handleClick}>Boop</button>
    )
  }
}

export default CoordinatesButton
