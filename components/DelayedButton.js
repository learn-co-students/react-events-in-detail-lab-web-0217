import React from 'react'
import ReactDom from 'react-dom'

class DelayedButton extends React.Component {
  constructor(props) {
    super()

    this.click = this.click.bind(this)
  }

  click(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return(
      <button onClick={this.click}></button>
    )
  }
}

module.exports = DelayedButton
