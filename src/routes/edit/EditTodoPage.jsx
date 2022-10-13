import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { TodoForm } from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);
  const { states, stateUpdates } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdates;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edit your task"
      defaultTodoText={todoText}
      submitText="Edit"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export { EditTodoPage };
