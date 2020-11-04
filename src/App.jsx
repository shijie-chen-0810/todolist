import React, { Component } from 'react'

import TodoForm from './views/TodoForm'
import TodoList from './views/TodoList'
import FilterList from './views/FilterList'

export default class App extends Component {
  state = {
    list: [],
    showList:[],
    allSelect: false,
    type:'all'
  }
  handleReceive = (item) => {
    this.state.list.push(item);
    this.handleFilter(this.state.type)
    this.setState({}, this.allSelectBool)
  }
  deleteOne = (index) => {
    this.state.list.splice(index, 1)
    this.handleFilter(this.state.type)
    this.setState({}, this.allSelectBool)
  }
  changeOne = (status, index) => {
    this.setState((state) => {
      state.showList[index].status = status
      return state
    }, this.allSelectBool)
    this.handleFilter(this.state.type)
  }
  allSelectBool = () => {
    this.setState({
      allSelect: this.state.list.length ? this.state.list.every(item => item.status) : false
    })
  }
  allStatus = (checked) => {
    this.setState((state) => {
      state.list.forEach(item => {
        item.status = checked
      })
      return state
    }, this.allSelectBool)
  }
  handleFilter = (type) => {
    this.setState({type})
    switch (type) {
      case 'all':
        this.changeShowList()
        break;
      case 'done':
        this.changeShowList(true)
        break;
      case 'not':
        this.changeShowList(false)
        break;
      default:
        break;
    }
  }
  changeShowList = (type) => {
    if(type||type === false){
      this.setState((state)=>{
        state.showList = this.state.list.filter(item=>{
          return item.status === type
        })
        return state
      },()=>{console.log(this.state.list,this.state.showList)})
    }else{
      this.setState((state)=>{
        state.showList = this.state.list
        return state
      },()=>{console.log(this.state.list,this.state.showList)})
    }
  }
  render() {
    return (
      <>
        <TodoForm
          onReceive={this.handleReceive}
          allStatus={this.allStatus}
          allSelect={this.state.allSelect}
        ></TodoForm>
        <TodoList
          list={this.state.showList}
          deleteOne={this.deleteOne}
          changeOne={this.changeOne}
        ></TodoList>
        <FilterList handleFilter={this.handleFilter}></FilterList>
        你选择的是-------{this.state.type}
      </>
    )
  }
}
