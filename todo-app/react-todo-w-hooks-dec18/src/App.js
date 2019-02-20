import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'walk dog',
      isComplete: false
    },
    {
      id: 1,
      text: 'buy ticket',
      isComplete: true
    }
  ]);
  const [id, setId] = useState(2);

  function handleTodos(newTodo) {
    newTodo = {id, text: newTodo, isComplete: false};
    setId(id + 1);
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodo(id) {
    let toggledTodos = todos.map(todo => 
      todo.id === id
      ? todo = {...todo, isComplete: !todo.isComplete}
      : todo);
    setTodos(toggledTodos);
  }

  return (
    <div className="App">
      <TodoForm handleTodos={handleTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
