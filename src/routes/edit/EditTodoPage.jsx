import React from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { TodoForm } from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { stateUpdates } = useTodos();
  const { editTodo } = stateUpdates;

  return (
    <TodoForm
      label="Edit your new task"
      submitText="Edit"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export { EditTodoPage };
