import React from 'react'
import './UserItem.css'

const UserItem = (props) => {

    const { avatar, html_url } = props
    return (

        <div className='UserItem'>
            <div className='avatar-image-container'>
                <img src={avatar} className='avatar' />
            </div>
            <div>
                <button><a href={html_url}>More</a></button>
            </div>
        </div>
    )
}

export default UserItem