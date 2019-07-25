import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, changeTodos] = React.useState([
    {
      id: 0,
      todoText: 'make todo app',
      isComplete: false
    },
    {
      id: 1,
      todoText: "walk the dog",
      isComplete: true
    }
  ]);

  React.useEffect(() => {
    let url = 'https://e83ievlbz5.execute-api.us-east-1.amazonaws.com/api-v3/weenie?TableName=TodosTable';
    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(res => res.json())
    .then(data => {
      changeTodos(data.Items)
    })
  })

  const [nextId, changeId] = React.useState(2);

  const addTodo = (todoText) => {
    let newTodo = {id: nextId, todoText, isComplete: false};
    let newTodos = [...todos, newTodo];
    changeTodos(newTodos);
    changeId(nextId + 1);
  }

  const deleteTodo = (todoId) => {
    let newTodos = todos.filter(todo => (
      todo.id === todoId ? null : todo
    ));
    changeTodos(newTodos)
  }

  const toggleTodo = (todoId) => {
    let newTodos = todos.map(todo => (
      todo.id === todoId ? {...todo, isComplete: !todo.isComplete} : todo
    ));
    changeTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
