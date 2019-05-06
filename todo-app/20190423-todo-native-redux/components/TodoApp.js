import React from 'react';
import { View, Text } from 'react-native';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoApp({ todos, addTodo, deleteTodo, toggleTodo }) {
  return (
    <View>
      <Text style={{fontSize: 30}}>Todo App</Text>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          todoText={todo.todoText}
          isComplete={todo.isComplete}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </View>
  )
}

export default TodoApp;