import React from 'react';

function Todo({todoId, todoText, isComplete, toggleTodo, deleteTodo}) {
  return (
    <p>
      <input type="checkbox" checked={isComplete} onChange={() => toggleTodo(todoId)} />
      <span>{todoText}</span>
      <button onClick={() => deleteTodo(todoId)}>x</button>
    </p>
  )
}

Todo.defaultProps = {
  todoText: "yoyo",
  isComplete: "false"
}

export default Todo;