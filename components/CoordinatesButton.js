const React = require('react');

class CoordinatesButton extends React.Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

  	handleClick(event) {
    	this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  	}

	render() {
		return (
			<button onClick={this.handleClick} />
		);
	}
}

module.exports = CoordinatesButton;