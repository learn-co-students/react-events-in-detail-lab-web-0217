import React from 'react'

class DelayedButton extends React.Component {
  constructor() {
    super()
    this.delayClick = this.delayClick.bind(this)
  }

  delayClick(event){
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

  render() {
    return(
      <button onClick={this.delayClick}></button>
    )
  }
}

module.exports = DelayedButton
