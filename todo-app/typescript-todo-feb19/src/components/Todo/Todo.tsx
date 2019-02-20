import React from 'react';

interface Todo {
  id: number
  todoText: string
  isComplete: boolean
}

function Todo({id = 5, todoText = "yoyo", isComplete = false}: Todo) {
  return (
    <ul>
      {todoText}
    </ul>
  )
}

export default Todo;