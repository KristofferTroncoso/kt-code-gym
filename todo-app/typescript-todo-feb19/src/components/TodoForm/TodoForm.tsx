import React, { Component } from 'react';

interface Props {
  addTodo: Function
}

class TodoForm extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: 'yo'
    }
  }

  addTodo = (e: any) => {
    e.preventDefault();
    this.props.addTodo(e.target.value);
  }
  
  render() {
    return (
      <form  onSubmit={this.addTodo}>
        <input type="text"></input>
      </form>
    )
  }
}

export default TodoForm;