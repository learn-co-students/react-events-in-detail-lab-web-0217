import React from 'react'

export default class DelayedButton extends React.Component{
	constructor() {
		super();
		this.click = this.click.bind(this)
	}
	click(event) {
		event.persist()
	    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
		}
	render() {
		return(
			<div>
				<button onClick={this.click}>delay</button>
			</div>
		)
	}
}

