import React from 'react';
import { TodoForm } from '../../ui/TodoForm/TodoForm';
import { useTodos } from '../../hooks/useTodos';

const NewTodoPage = () => {
  const { stateUpdates } = useTodos();
  const { addTodo } = stateUpdates;

  return (
    <TodoForm
      label="Write your new task"
      submitText="Add"
      submitEvent={(text) => addTodo(text)}
    />
  );
};

export { NewTodoPage };
