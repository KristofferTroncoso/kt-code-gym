import React from 'react';
import Todo from '../Todo/Todo';

interface Props {
  todos: Array<ITodo>
  toggleTodo: Function
}

interface ITodo {
  id: number
  todoText: string,
  isComplete: boolean
}

function TodoList({todos, toggleTodo}: Props) {
  const todoList = todos.map(todo => (
    <Todo 
      key={todo.id}
      id={todo.id}
      todoText={todo.todoText}
      isComplete={todo.isComplete}
      toggleTodo={toggleTodo}
    />
  ))

  return (
    <div>
      {todoList}
    </div>
  )
}

export default TodoList;