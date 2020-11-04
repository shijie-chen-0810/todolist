import React, { Component } from 'react'

import TodoInput from './styled/InputStyle'

export default class TodoForm extends Component {
  constructor(){
    super();
    this.state={
      value:''
    }
  }
  handleInput = (e) => {
    this.setState({
      value:e.target.value
    })
  }
  handleKeyup = (e) => {
    if(e.keyCode === 13){
      this.props.onReceive({msg:e.target.value,status:false})
      this.setState({
        value:''
      })
    }
  }
  handleChange = (e) => {
    const checked = e.target.checked
    this.props.allStatus(checked)
  }
  render() {
    return (
      <div>
        <input type='checkbox' checked={this.props.allSelect} onChange={this.handleChange}/>
        <TodoInput type="text" value={this.state.value} onChange={this.handleInput} onKeyUp={this.handleKeyup}></TodoInput>
      </div>
    )
  }
}
