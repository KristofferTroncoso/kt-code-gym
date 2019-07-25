import React from 'react';
import Todo from './Todo';

function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <div>
      {todos.map(todo => (
        <Todo 
          key={todo.id}
          todoId={todo.id}
          todoText={todo.todoText}
          isComplete={todo.isComplete}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList;