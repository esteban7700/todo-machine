import React from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import './AddForm.css'

function AddForm() {

    const {addTodo} = React.useContext(GeneralContext)

    const [newTodoText, setNewTodoText] = React.useState('');

    return (
        <form>
            <label>Add a new TODO</label>
            <textarea placeholder='Take notes about my last lesson' onChange={(e) => setNewTodoText(e.target.value)}/>
            <button className='button-add' onClick={(e) => addTodo(newTodoText) }>Add</button>
        </form>
    )
}

export { AddForm }
