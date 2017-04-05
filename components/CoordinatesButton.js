import React from 'react';

export default class CoordinatesButton extends React.Component {

  constructor() {
    super();
    this.pushButton = this.pushButton.bind(this);
    // this.onReceiveCoordinates = props.onReceiveCoordinates.bind(this)
  }

  pushButton(event) {
    let array = [event.screenX, event.screenY]
    return this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <div>
        <button onClick={this.pushButton}></button>
      </div>
    )
  }
}
