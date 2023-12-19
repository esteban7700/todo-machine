import React from 'react'
import './Counter.css'
import { GeneralContext } from '../../contexts/GeneralContext'

function Counter() {

    const { completedTodos, totalTodos } = React.useContext(GeneralContext)

    return (
        <h2>You have completed <span className='completed'>{completedTodos}</span> of <span className='total'>{totalTodos}</span> To do's</h2>
    )
}

export { Counter }
