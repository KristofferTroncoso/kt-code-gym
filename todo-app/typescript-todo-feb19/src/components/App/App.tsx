import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

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
  constructor(props: {}) {
    super(props);
    this.state = {
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
  }


  addTodo = (todoText: string) => {
    let newTodo = {
      id: this.state.nextId,
      todoText,
      isComplete: false
    };
    let nextId = this.state.nextId + 1;
    this.setState({todos: [...this.state.todos, newTodo], nextId}, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <button onClick={() => this.addTodo('yo')}>YO</button>
      </div>
    );
  }
}

export default App;
