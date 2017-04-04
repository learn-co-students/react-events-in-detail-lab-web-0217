import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    event.persist()
    let delay = this.props.delay
    let fn = this.props.onDelayedClick(event)
    setTimeout(function(fn) {
      fn
    }, delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Boop</button>
    )
  }
}

export default DelayedButton
