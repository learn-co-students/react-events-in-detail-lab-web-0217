import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(){
    super()
    this.click=this.click.bind(this)
  }

  click(event){
    const coord = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.click}></button>
    )
  }
}
