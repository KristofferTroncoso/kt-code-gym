import React, { Component } from 'react';
import Todo from '../Todo/Todo';

interface IState {
  todos: Array<ITodo>
  nextId: number
}

interface ITodo {
  id: number
  todoText: string,
  isComplete: boolean
}

class App extends Component<{}, IState> {
  state : IState = {
    todos: [
      {
        id: 0,
        todoText: "Walk the dog",
        isComplete: false
      },
      {
        id: 1,
        todoText: "Lift weights",
        isComplete: true
      }
    ],
    nextId: 2
  }

  render() {
    const todoList = this.state.todos.map(todo => (
      <Todo 
        id={todo.id}
        todoText={todo.todoText}
        isComplete={todo.isComplete}
      />
    ))

    return (
      <div className="App">
        <h1>Todos</h1>
        {todoList}
      </div>
    );
  }
}

export default App;
