import React from 'react';
import { TodoForm } from '../../ui/TodoForm/TodoForm';

const NewTodoPage = () => {
  return (
    <TodoForm
      label="Write your new task"
      submitText="Add"
      submitEvent={() => console.log('Call add TODO')}
    />
  );
};

export { NewTodoPage };
