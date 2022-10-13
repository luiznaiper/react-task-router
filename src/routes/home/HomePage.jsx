import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch/index.js';
import { TodoList } from '../../ui/TodoList/index.js';
import { TodoItem } from '../../ui/TodoItem/TodoItem.jsx';
import { CreateTodoButton } from '../../ui/CreateTodoButton/CreateTodoButton.jsx';
import { HideCompletedTodos } from '../../ui/HideCompletedTodos';
import { ShowCompletedTodos } from '../../ui/ShowCompletedTodos';
import { TodoCongrats } from '../../ui/TodoCongrats';
import { Modal } from '../../ui/Modal';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { EmptySearchedResults } from '../../ui/EmptySearchedResults';
import { ChangeAlert } from '../../ui/ChangeAlert';
import '../App.css';
function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdates } = useTodos();

  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    //openModal,
  } = states;

  const {
    setSearchValue,
    toggleCompleteTodo,
    // addTodo,
    deleteTodo,
    hideCompletedTodosFn,
    showCompletedTodosFn,
    // setOpenModal,
    sincronizeTodos,
  } = stateUpdates;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptyTodos />}
        onTodoCongrats={() => <TodoCongrats />}
        onEmptySearchedResults={(searchValue) => (
          <EmptySearchedResults searchValue={searchValue} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.id)}
            onEdit={() => navigate(`/edit/${todo.id}`)}
            onDelete={() => deleteTodo(todo.id)}
            hide={todo.hide}
          />
        )}
      </TodoList>
      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <CreateTodoButton
        onClick={() => navigate('/new')}
        //setOpenModal={setOpenModal}
      />
      <HideCompletedTodos onHide={() => hideCompletedTodosFn()} />
      <ShowCompletedTodos onShow={() => showCompletedTodosFn()} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export { HomePage };
