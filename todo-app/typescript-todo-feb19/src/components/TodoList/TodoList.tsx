import React from 'react';
import Todo from '../Todo/Todo';

interface Props {
  todos: Array<ITodo>
}

interface ITodo {
  id: number
  todoText: string,
  isComplete: boolean
}

function TodoList({todos}: Props) {
  const todoList = todos.map(todo => (
    <Todo 
      id={todo.id}
      todoText={todo.todoText}
      isComplete={todo.isComplete}
    />
  ))

  return (
    <div>
      {todoList}
    </div>
  )
}

export default TodoList;