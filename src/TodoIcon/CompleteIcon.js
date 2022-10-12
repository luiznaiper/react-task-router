import React from 'react'
import { TodoIcon } from './'

function CompleteIcon({ completed, onComplete,onHide }){
    return(
        <TodoIcon 
            type='check'
            color={completed ? '#4caf50' : 'gray'}
            onClick={onComplete}
            onHide={onHide}
        />
    )
}

export { CompleteIcon }