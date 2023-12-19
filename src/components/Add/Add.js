import React from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import './Add.css'

function Add() {

    const { openModal, setOpenModal } = React.useContext(GeneralContext)

    return (
        <button className='add' onClick={() => {setOpenModal(!openModal)}}>
            +
        </button>
    )
}

export { Add }
