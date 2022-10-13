import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodovalue] = React.useState('');

  const onChange = (ev) => {
    setNewTodovalue(ev.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    navigate('/');
    props.submitEvent(newTodoValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Feed your dog"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
          onClick={onSubmit}
        >
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
