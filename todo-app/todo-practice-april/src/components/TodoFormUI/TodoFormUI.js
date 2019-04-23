import React, { Component } from 'react';
import styles from './TodoForm.module.css';
import TodoForm from '../../containers/TodoForm';

function TodoFormUI({value, handleChange, handleSubmit}) {
  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="What it do"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TodoForm(TodoFormUI);