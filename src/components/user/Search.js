import React, { Component } from 'react'
import './Search.css'

const Search = (props) => {

    const SearchUser = (e) => {
        props.searchUser(e.target.value)
    }
    return (
        <form className='Search'>
            <input type='text' value={props.value} placeholder='Search by Github ID' className='search-field' onChange={SearchUser} name='text' />

        </form>
    )

}

export default Search