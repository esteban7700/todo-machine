import React from 'react'
import { GeneralContext } from '../../contexts/GeneralContext';
import './Item.css'
import {Icon} from '../../components/Icon/Icon.js'

function Item({ index }) {

    const { searchedTodos: todos, completeTodo, removeTodo } = React.useContext(GeneralContext);
    const todo = todos[index]

    return (
        <li className='item'>
            <Icon type='check' color={todo.completed ? 'green' : 'gray'} onClick={() => completeTodo(index)}></Icon>
            <p className={`item-base ${todo.completed && 'item-completed'}`}>{todo.text}</p>
            <Icon type='delete' color={'gray'} onClick={() => removeTodo(index)}></Icon>
        </li>
    )
}

export { Item }
