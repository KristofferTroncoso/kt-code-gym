import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const propTypes = {
  isComplete: PropTypes.bool.isRequired,
  todoText: PropTypes.string
}

const defaultProps = {
  todoText: 'Todo here'
}

function TodoItem({isComplete, todoText, toggleTodo, id, deleteTodo}) {
  return (
    <div className={styles.div}>
      <input 
        type="checkbox" 
        checked={isComplete}
        onChange={e => toggleTodo(id)}
      />
      <p style={{textDecoration: isComplete ? 'line-through' : null}}>{todoText}</p>
      <button 
        className="TodoItem__deleteBtn"
        onClick={e => deleteTodo(id)}
      >
        x
      </button>
    </div>
  );
}

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

export default TodoItem;