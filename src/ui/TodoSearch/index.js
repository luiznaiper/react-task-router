import React from "react"
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }){

    const onSearchValueChange = (ev)=> {
        console.log(ev.target.value)
        setSearchValue(ev.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Search your tasks here!" 
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />     
    )
}

export {TodoSearch};