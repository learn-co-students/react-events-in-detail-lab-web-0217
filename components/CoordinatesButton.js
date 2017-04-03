const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.clickMethod = this.clickMethod.bind(this)

  }

  clickMethod(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (

      <button onClick={this.clickMethod}>
        Button!
       </button>
    );
  }
}

module.exports = CoordinatesButton
