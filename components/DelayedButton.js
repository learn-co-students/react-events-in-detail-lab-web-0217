import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
      }, this.props.delay
    )
  }

  render() {
    return (
      <button onClick={this.handleClick}>How long???</button>
    );
  }
}
export default DelayedButton;
