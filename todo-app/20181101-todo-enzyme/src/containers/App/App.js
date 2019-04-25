import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextTodoId: 2,
      todos: [
        {
          id: 0,
          todoText: 'buy food',
          isComplete: true
        },
        {
          id: 1,
          todoText: 'walk the dog',
          isComplete: false
        },
      ]
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addNewTodo(text) {
    const newTodo = {
      id: this.state.nextTodoId,
      todoText: text,
      isComplete: false
    };
    this.setState({
      nextTodoId: this.state.nextTodoId + 1,
      todos: [...this.state.todos, newTodo]
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? {id: todo.id, todoText: todo.todoText, isComplete: !todo.isComplete} : todo
      })
    })
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoForm submitText={this.addNewTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
