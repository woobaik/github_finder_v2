import React from 'react'
import './ClearList.css'

const ClearList = (props) => {
    return <div className='ClearList'>
        <button className='clear-btn' onClick={props.clearList}>CLEAR FORM</button>
    </div>
}

export default ClearList