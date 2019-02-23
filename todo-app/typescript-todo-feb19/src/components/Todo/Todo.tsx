import React from 'react';

interface Props {
  id: number
  todoText: string
  isComplete: boolean
  toggleTodo: Function
  deleteTodo: Function
}

function Todo({id = 5, todoText = "yoyo", isComplete = false, toggleTodo, deleteTodo}: Props) {
  let style = isComplete ? {textDecoration: 'line-through'} : {};
  return (
    <ul>
      <input type="checkbox" checked={isComplete} onChange={e => toggleTodo(id)}/>
      <span style={style}>{todoText}</span>
      <button onClick={e => deleteTodo(id)}>X</button>
    </ul>
  )
}

export default Todo;