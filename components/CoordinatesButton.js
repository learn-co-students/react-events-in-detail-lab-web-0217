const React = require('react')

class CoordinatesButton extends React.Component {
  constructor (prop) {
    super(prop)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
    <div>
    <button onClick={this.handleClick}></button>
    </div>
  )
  }
}

module.exports = CoordinatesButton
