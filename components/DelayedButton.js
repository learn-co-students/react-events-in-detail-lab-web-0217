const React = require('react')

class DelayedButton extends React.Component {
  constructor(func, number){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    debugger
    event.persist() //allows you to call the event after the event is return
    setTimeout(() => { //set the function within the scope of the event
      this.props.onDelayedClick(event) //onDelayedClick is the prop we pass in
    }, this.props.delay) //how are we passing in the delayed time and setting it?
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>Delayed</button>
      </div>
    )
  }
}

module.exports = DelayedButton
