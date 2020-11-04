import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
  return (
    <ul>
      {props.list.map((item,index) => {
        return <TodoItem item={item} index={index} key={index} deleteItem={(msg) => {
          props.deleteOne(msg)
        }}
        changeItem={(msg,index) => {
          props.changeOne(msg,index)
        }}
        >
        </TodoItem>
      })}
      
    </ul>
  )
}
export default TodoList