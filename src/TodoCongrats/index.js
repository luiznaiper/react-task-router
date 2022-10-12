import React from "react"
import './TodoCongrats.css'

function TodoCongrats(){
   
    return(
        <p 
            className={`TodoCongrats`}
        >
        <span>Congratulations! </span> You finished all the tasks
        </p>
    );
}

export { TodoCongrats};

