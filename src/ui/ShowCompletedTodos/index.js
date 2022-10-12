import React from "react";
import './ShowCompletedTodos.css'

function ShowCompletedTodos(props){
   
    return(
        <button 
            className='ShowCompletedTodos'
            onClick={props.onShow}
        >
        Show completed
        </button>
    );
}

export { ShowCompletedTodos};