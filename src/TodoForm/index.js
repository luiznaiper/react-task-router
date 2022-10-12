import React from "react"
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }){
    const [newTodoValue, setNewTodovalue] = React.useState('')
    
    const onChange = (ev) =>{
        setNewTodovalue(ev.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (ev) => {
        ev.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Write your new task</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Feed your dog"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                    onClick={onSubmit}
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }