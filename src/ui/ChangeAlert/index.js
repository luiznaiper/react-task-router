import React from 'react'
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ sincronize }){

    const { show, toggleShow } = useStorageListener(sincronize)

    if (show){
        return (
            <div className='ChangeAlert--container'>
                <p>We have changes</p>
                <button
                    onClick={()=> toggleShow(false )}
                >
                    Update info
                </button>
            </div>
        )
    } else {
        return null
    }
}


export { ChangeAlert }