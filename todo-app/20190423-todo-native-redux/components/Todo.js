import React from 'react';
import { View, Text, Button } from 'react-native';
import { H1 } from 'native-base';

function Todo({ id, todoText, isComplete, deleteTodo, toggleTodo }) {
	return (
    <View 
      style={{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        backgroundColor: 'papayawhip',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
      }}
    >
      <Button title="Toggle" onPress={() => toggleTodo(id)} />
			<H1 style={isComplete ? {color: 'black'} : {color: 'lightseagreen', textDecorationLine: 'line-through'}}>
				{todoText}
			</H1>
			<Button title="X" onPress={() => deleteTodo(id)} />
		</View>
	);
}

Todo.defaultProps = {
	todoText: 'default todo',
	isComplete: false
};

export default Todo;
