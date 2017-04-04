import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)},
      this.props.delay)
    // we need to add in onDelayedClick in an anonymous function because then we can specify it taking the argument of event
  }

  render() {
    return(<button onClick={this.handleClick}>Button</button>)
  }
}

module.exports = DelayedButton
