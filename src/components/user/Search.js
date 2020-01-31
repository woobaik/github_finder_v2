import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    searchUser = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
        this.props.searchUser(e.target.value)
    }

    render() {

        return (
            <form>
                <input type='text' value={this.state.text} placeholder='Search by Github ID' onChange={this.searchUser} name='text' />
                <input type='submit' />
            </form>
        )
    }
}

export default Search