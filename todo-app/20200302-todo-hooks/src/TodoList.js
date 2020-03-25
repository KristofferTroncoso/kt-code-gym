import React from 'react';
import Todo from './Todo';

function TodoList({todos, deleteTodo, toggleTodo}) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList;