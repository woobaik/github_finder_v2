import React, { Component } from 'react'
import './Search.css'

class Search extends Component {

    searchUser = (e) => {
        this.props.searchUser(e.target.value)
    }

    render() {

        return (
            <form className='Search'>
                <input type='text' value={this.props.value} placeholder='Search by Github ID' className='search-field' onChange={this.searchUser} name='text' />

            </form>
        )
    }
}

export default Search