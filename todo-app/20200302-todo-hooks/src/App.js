import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import {v4 as uuid} from 'uuid';

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      todoText: "walk dog",
      isComplete: false
    },
    {
      id: 2,
      todoText: "work out",
      isComplete: true
    }
  ])

  const addTodo = (todoText) => {
    let newTodo = {
      id: uuid(),
      todoText,
      isComplete: false
    };
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    console.group(`deleting todo with id ${id}`)
    const newTodos = todos.filter(todo => todo.id !== id ? todo : null);
    setTodos(newTodos);
  }

  const toggleTodo = (id) => {
    console.log(`toggling todo with id ${id}`)
    const newTodos = todos.map(todo => todo.id !== id ? todo : {...todo, isComplete: !todo.isComplete})
    setTodos(newTodos);
  }

  return (
    <div>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;
