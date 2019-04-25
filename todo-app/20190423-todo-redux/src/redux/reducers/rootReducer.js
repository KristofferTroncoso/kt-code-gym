import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
	nextId: 2,
	todos: [
		{
			id: 0,
			todoText: 'Walk the dog',
			isComplete: false
		},
		{
			id: 1,
			todoText: 'Work out',
			isComplete: true
		}
	]
};

function rootReducer(state = initialState, action) {
	let newState = { ...state };
	let newTodo, todos, nextId;
	switch (action.type) {
		case ADD_TODO:
			newTodo = {
				id: newState.nextId,
				todoText: action.todo,
				isComplete: false
			};
			todos = [...newState.todos, newTodo];
			nextId = newState.nextId;
			nextId++;
			newState = { nextId, todos };
			return newState;
		case DELETE_TODO:
			todos = newState.todos.filter(todo => action.id !== todo.id);
			newState = { ...newState, todos };
			return newState;
		case TOGGLE_TODO:
			todos = newState.todos.map(todo =>
				action.id === todo.id ? { ...todo, isComplete: !todo.isComplete } : todo
			);
			return { ...newState, todos };
		default:
			return state;
	}
}

export default rootReducer;
