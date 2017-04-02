const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}/>
    )
  }
}

module.exports = CoordinatesButton
