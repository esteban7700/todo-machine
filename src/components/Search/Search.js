import React from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import './Search.css'

function Search() {

    const { searchValue, setSearchValue } = React.useContext(GeneralContext)
 
    return (
        <input
         placeholder='Search...'
         className='input'
         value={searchValue}
         onChange={e => setSearchValue(e.target.value)} ></input>
    )
}

export { Search }
