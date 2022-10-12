import React from "react";
import './HideCompletedTodos.css'

function HideCompletedTodos(props){

    return(
        <button 
            className='HideCompletedTodos'
            onClick={props.onHide}  
            >
            Hide completed
        </button>
    );
}

export { HideCompletedTodos};