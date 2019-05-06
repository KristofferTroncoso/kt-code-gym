import TodoApp from './TodoApp';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/actions/actions';

const mapStateToProps = state => ({
	todos: state.todos
});
const mapDispatchToProps = dispatch => {
	return {
		addTodo: todo => dispatch(addTodo(todo)),
		deleteTodo: id => dispatch(deleteTodo(id)),
		toggleTodo: id => dispatch(toggleTodo(id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoApp);
