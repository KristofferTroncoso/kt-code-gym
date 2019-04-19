import React from 'react';
import Header from './Header';
import TestRenderer from 'react-test-renderer';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

test('render default <Header />', () => {
  const component = TestRenderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('enzyme shallow render', () => {
  const component = shallow(<Header />);
  expect(toJson(component)).toMatchSnapshot();
});

test('enzyme full render', () => {
  const component = mount(<Header />);
  expect(toJson(component)).toMatchSnapshot();
});

test('enzyme static render', () => {
  const component = render(<Header />);
  expect(toJson(component)).toMatchSnapshot();
});