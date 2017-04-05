import React from 'react'

export default class CoordinatesButton extends React.Component {
	constructor() {
		super();
		this.pushButton = this.pushButton.bind(this)
	}
	
	pushButton(event) {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}
	render() {
		return(
			<div>
				<button onClick={this.pushButton}>coordinate</button>
			</div>
		)
	}
}
