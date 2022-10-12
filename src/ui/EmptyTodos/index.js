import React from 'react'
import './EmptyTodos.css'

function EmptyTodos(){
    return <p 
              className='empty-todos--p'
            >
            Place your first <span>Task :)</span> 
            </p>
}

export { EmptyTodos }