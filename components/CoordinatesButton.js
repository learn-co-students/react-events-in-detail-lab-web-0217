import React from 'react'

class CoordinatesButton extends React.Component {
	constructor(){
		super()
		this.coordinates = this.coordinates.bind(this)
	}

	coordinates(event){
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		<button onClick={this.coordinates}>Yup</button>
	}
}

module.exports = CoordinatesButton