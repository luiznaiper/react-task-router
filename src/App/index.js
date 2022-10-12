import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch/index.js"
import { TodoList } from "../TodoList/index.js"
import { TodoItem } from "../TodoItem/index.js"
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from "../CreateTodoButton/index.js"
import { HideCompletedTodos } from "../HideCompletedTodos"
import { ShowCompletedTodos } from "../ShowCompletedTodos"
import { TodoCongrats } from "../TodoCongrats"
import { Modal } from '../Modal'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'
import { EmptySearchedResults } from "../EmptySearchedResults"
import { ChangeAlert } from "../ChangeAlert";

import './App.css';


function App() {  
  const {
    states,
    stateUpdates
  }  = useTodos()

const {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
} = states

const {
          setSearchValue,
          toggleCompleteTodo,
          addTodo,
          deleteTodo,
          hideCompletedTodosFn,
          showCompletedTodosFn,
          setOpenModal,
          sincronizeTodos
} = stateUpdates

  return(
    <React.Fragment>
       <TodoHeader loading={loading}>
          <TodoCounter
             totalTodos={totalTodos}
             completedTodos={completedTodos}
           />    
           
           <TodoSearch
                 searchValue={searchValue}
                 setSearchValue={setSearchValue} 
            />
       </TodoHeader>
            <TodoList
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              completedTodos={completedTodos}
              totalTodos={totalTodos}
              searchValue={searchValue}
              onError={() => <TodosError/>}
              onLoading={() => <TodosLoading/>}
              onEmptyTodos={() => <EmptyTodos/>}
              onEmptySearchResults={() => <EmptyTodos/>}
              onTodoCongrats={() => <TodoCongrats/>}
              onEmptySearchedResults={(searchValue) => <EmptySearchedResults searchValue={searchValue}/>}
            >
              {todo =>(
                <TodoItem 
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=> toggleCompleteTodo (todo.text)}
                  onDelete={()=> deleteTodo (todo.text)}
                  hide={todo.hide}
                 />
              )}
              
            </TodoList>
         {!!openModal && (
            <Modal>
             <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
             />
            </Modal>
         )}
       <CreateTodoButton 
         setOpenModal={ setOpenModal }
       />      
       <HideCompletedTodos
        onHide={()=> hideCompletedTodosFn()}
       />      
       <ShowCompletedTodos 
         onShow={()=> showCompletedTodosFn()}
       />      

       <ChangeAlert
        sincronize={sincronizeTodos}
       />
    </React.Fragment>
   )
}

export default App;
