import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoForm.module.css';

const propTypes = {
  submitText: PropTypes.func
}

const defaultProps = {

}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({inputText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitText(this.state.inputText);
    this.setState({inputText: ''});
  }

  render() {
    return (
      <div className={styles.div}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className={styles.input}
            placeholder="What it do"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;

export default TodoForm;