import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import PropTypes from 'prop-types';

const propTypes = {
  todos: PropTypes.array
}

class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <div className="TodoList">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            isComplete={todo.isComplete} 
            todoText={todo.todoText} 
            id={todo.id}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;