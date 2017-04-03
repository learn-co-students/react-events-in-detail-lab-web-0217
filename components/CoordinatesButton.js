import React from 'react'
import ReactDom from 'react-dom'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super()

    this.click = this.click.bind(this)
  }

  click(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.click}></button>
    )
  }
}

module.exports = CoordinatesButton
