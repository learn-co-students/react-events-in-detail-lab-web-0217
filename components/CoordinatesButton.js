const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(prop){
    super()
    this.handleClick = this.handleClick.bind(this)
    }

  handleClick(event){
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Position</button>
    )
    }
}

module.exports = CoordinatesButton
