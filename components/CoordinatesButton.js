import React from 'react'

class CoordinatesButton extends React.Component {
	constructor(){
		super()
		this.coordinates = this.coordinates.bind(this)
	}

	coordinates(event){
		return this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){

		return (<button onClick={this.coordinates}>Yup</button>)
	}
}

module.exports = CoordinatesButton