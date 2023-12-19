import React from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'

function Empty() {

    const {
        searchValue
      } = React.useContext(GeneralContext)

    return (
        <div className='empty'>
            {searchValue === '' ? 'Create your first TODO': 'TODOs werent found'} 
        </div>
    )
}

export { Empty }
