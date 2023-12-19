import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const GeneralContext = React.createContext();

function GeneralProvider({ children }) {

    const {
        item: todos,
        persistItem: persistTodos,
        loading,
        error
    } = useLocalStorage('TODOS_v1', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    let completedTodos = todos.filter(todo => todo.completed === true).length
    let totalTodos = todos.length

    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

    const completeTodo = (index) => {
        todos[index].completed = !todos[index].completed
        persistTodos(todos)
    }
    const removeTodo = (index) => {
        todos.splice(index, 1)
        persistTodos(todos)
    }
    const addTodo = (newTodoText) => {
        if(newTodoText !== '') {
            todos.push({ text: newTodoText, completed: false })
        }
        persistTodos(todos)
    }

    return <GeneralContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        loading,
        error,
        completeTodo,
        removeTodo,
        addTodo,
        openModal,
        setOpenModal
    }}>
        {children}
    </GeneralContext.Provider>
}

export { GeneralContext, GeneralProvider }
