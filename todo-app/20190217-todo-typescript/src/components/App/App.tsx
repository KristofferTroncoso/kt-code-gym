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

class App extends Component<null, IState> {
  constructor(props: null) {
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

  toggleTodo = (id: number) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id ) {
        return {...todo, isComplete: !todo.isComplete}
      } else {
        return todo;
      }
    });
    this.setState({todos})
  }

  deleteTodo = (id: number) => {
    let todos = this.state.todos.filter(todo => id !== todo.id);
    this.setState({todos})
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
