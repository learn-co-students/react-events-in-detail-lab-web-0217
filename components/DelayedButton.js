import React from 'react'

export default class DelayedButton extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(e){
    e.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}></button>
    )
  }
}
