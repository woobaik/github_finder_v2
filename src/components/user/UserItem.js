import React from 'react'
import './UserItem.css'

const UserItem = (props) => {
    console.log(props)
    return (

        <div className='UserItem'>
            <div className='avatar-image'>
                <img src={props.avatar} />
            </div>

        </div>
    )
}

export default UserItem