import React from "react";
import './TodoList.css'

function TodoList(props){

    const renderFunc = props.children || props.render
    return(
        <section className='TodoList-container'>
            {props.error && props.onError()}
            
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchValue)}
            
            {(!props.loading && props.completedTodos === props.totalTodos && props.totalTodos > 0) && props.onTodoCongrats()}
            
            {(!props.loading && !props.error) &&props.searchedTodos.map(renderFunc)}


        </section>
    );
}

export { TodoList};