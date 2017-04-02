const React = require('react')

class DelayedButton extends React.Component {
  constructor(props) {
    super()
    this.delay = props.delay
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}/>
    )
  }
}

module.exports = DelayedButton
