import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

function App({todos, addNewTodo, toggleTodo, deleteTodo}) {
  return (
    <div className="App">
      <Header />
      <TodoForm submitText={addNewTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
