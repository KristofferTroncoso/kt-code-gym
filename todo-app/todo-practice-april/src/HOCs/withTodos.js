import React from 'react';

function withTodos(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nextTodoId: 2,
        todos: [
          {
            id: 1,
            todoText: 'weenera',
            isComplete: true
          }
        ]
      }
    }

    fetchTodos = () => {
      fetch("./todos.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data.data
        })
      })
      .catch(err => console.log(err))
    }

    componentDidMount() {
      this.fetchTodos();
    }

    addNewTodo = (text) => {
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

    toggleTodo = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          return todo.id === id ? {id: todo.id, todoText: todo.todoText, isComplete: !todo.isComplete} : todo
        })
      })
    }

    deleteTodo = (id) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id
        })
      })
    }    

    render() {
      return <WrappedComponent todos={this.state.todos} addNewTodo={this.addNewTodo} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
    }
  }
}


export default withTodos;