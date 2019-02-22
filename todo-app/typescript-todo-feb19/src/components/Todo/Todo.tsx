import React from 'react';

interface Props {
  id: number
  todoText: string
  isComplete: boolean
  toggleTodo: Function
}

function Todo({id = 5, todoText = "yoyo", isComplete = false, toggleTodo}: Props) {
  return (
    <ul>
      <input type="checkbox" checked={isComplete} onChange={e => toggleTodo(id)}/>
      {todoText}
      <button>X</button>
    </ul>
  )
}

export default Todo;