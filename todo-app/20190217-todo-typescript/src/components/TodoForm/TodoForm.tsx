import React, { Component } from 'react';

interface Props {
  addTodo: Function
}

interface State {
  text: string
}

class TodoForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addTodo = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }
  
  render() {
    return (
      <form  onSubmit={this.addTodo}>
        <input 
          type="text" 
          value={this.state.text} 
          onChange={e => this.setState({text: e.target.value})}
        />
      </form>
    )
  }
}

export default TodoForm;