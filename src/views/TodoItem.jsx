import React, { Component } from 'react';

class TodoItem extends Component {
  handleChange = (e) => {
    const checked = e.target.checked
    this.props.changeItem(checked,this.props.index)
  }
  render() {
    return (
      <li>
      <input type="checkbox" checked={this.props.item.status} onChange={this.handleChange}/>
      {this.props.item.msg}
      <button onClick={this.props.deleteItem.bind(null, this.props.index)}>x</button>
    </li>
    );
  }
}

export default TodoItem;