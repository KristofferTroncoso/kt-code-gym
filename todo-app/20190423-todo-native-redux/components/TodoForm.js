import React from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <Form onSubmitEditing={this.handleSubmit}>
        <Item>
          <Input 
            onChangeText={text => this.setState({text})}
            placeholder="Username"
            value={this.state.text}
          />
        </Item>
      </Form>
    )
  }
}


export default TodoForm;