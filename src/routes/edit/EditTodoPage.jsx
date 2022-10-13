import React from 'react';
import { TodoForm } from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {
  return (
    <TodoForm
      label="Edit your new task"
      submitText="Edit"
      submitEvent={() => console.log('Call edit TODO')}
    />
  );
};

export { EditTodoPage };
