import React from 'react';
import TodoItem from './TodoItem';
import TestRenderer from 'react-test-renderer';

test('<TodoItem isComplete={true} />', () => {
  const component = TestRenderer.create(
    <TodoItem 
      isComplete={true}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<TodoItem isComplete={false} />', () => {
  const component = TestRenderer.create(
    <TodoItem 
      isComplete={false}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<TodoItem isComplete={false} todoText="Play with the dog" />', () => {
  const component = TestRenderer.create(
    <TodoItem 
      isComplete={false}
      todoText="Play with the dog"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});