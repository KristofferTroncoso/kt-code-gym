import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';

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
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
