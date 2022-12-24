










import React, { Component } from 'react'

export default class counter extends Component {
  constructor(props){
    super(props);
        this.state={
            counter:0,
        }
  }

  Increment(){
    this.setState({
        counter: this.state.counter+1
    })
  }

  Decrement(){
    this.setState({
        counter: this.state.counter-1
    })
  }

  reset(){
    this.setState({
      
            counter: 0
       
    })
  }

  render() {
    return (
      <div>
        Counter App
        <div>
            <div>{this.state.counter}</div>
        <button onClick={()=> {this.Increment()}}>+</button>
        <button onClick={()=> {this.Decrement()}}>-</button>
        <button onClick={()=> {this.reset()}}>Restart</button>
        </div>
      </div>
    )
  }
}

