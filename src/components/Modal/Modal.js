import React from 'react'
import { createPortal } from 'react-dom'
import { GeneralContext } from '../../contexts/GeneralContext'
import './Modal.css'

function Modal({ children }) {

    const { openModal, setOpenModal } = React.useContext(GeneralContext)

    return createPortal(
        <div className='modal-bg'>
            <button className='modal-close' onClick={() => setOpenModal(!openModal)}>X</button>
            {children}
        </div>
        , document.getElementById('modal')
    )
}

export { Modal }
