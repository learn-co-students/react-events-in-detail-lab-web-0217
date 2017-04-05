import React from 'react'

class DelayedButton extends React.Component {
	constructor(prop){
		super()
		this.something = this.something.bind(this) 
	}

	something(event){
		event.persist()
		return setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
	}

	render(){
		return (
			<button onClick={this.something}>sup yo</button>
		)
	}
}

module.exports = DelayedButton