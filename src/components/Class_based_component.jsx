import React, { Component } from 'react'

export default class Class_based_component extends Component {
  state = {
    showText: false,
    changeColor: false,
    count : 0,
    changeCountStyle: false
  }
  handleClick = () => {
    const {showText, changeColor}= this.state
    console.log('clicked')
    this.setState(
      { showText: !showText,
        changeColor: !changeColor 
      }
    )
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count:this.state.count+1  
    }
    )
  }


  componentDidMount(){
    console.log("this is called first time on page load");
    this.setState(
      {
        showText: !this.state.showText,
        changeColor: !this.state.changeColor
      }
    )
  }
  componentDidUpdate(prevProps, prevState){
    console.log("this is called when state or props change");
    console.log(prevProps, prevState)
    if(prevState && prevState.count !== this.state.count && this.state.count === 10){
      this.setState({
        ...this.state, 
        changeCountStyle: !this.state.changeCountStyle
      })
      
    }

  }
  render() {
    const { showText, changeColor, count } = this.state 
    // console.log(this.state)
    return (
      <div>
        <h1>Im class based comp</h1>
        {showText ? <h4 style={{color: changeColor ? 'red' : 'green'}}>Show Text</h4> : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase</button>
        <h3 style={{color: !this.state.changeCountStyle ? 'red' : 'blue', fontSize:this.state.changeCountStyle ? '30px' : '12px'}}>Count is {count}</h3>
      </div>
    )
  }
}
