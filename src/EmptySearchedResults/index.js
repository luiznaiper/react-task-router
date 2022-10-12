import React from "react"
import './EmptySearchedResults.css'

function EmptySearchedResults({ searchValue }){
   
    return(
        <p 
            className={`EmptySearchedResults`}
        >
        <span>Hey! </span> you don't have any tasks with the name <span className="searchValue">{searchValue}</span>
        </p>
    );
}

export { EmptySearchedResults};

