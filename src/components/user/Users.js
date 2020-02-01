import React, { Component, Fragment } from 'react'
import axios from 'axios'
import UserItem from './UserItem'
import Search from './Search'
import './Users.css'
import ClearList from './ClearList'

class Users extends Component {
    state = {
        users: [],
        loading: false,
        text: ''
    }


    searchUser = (text) => {
        this.setState({ loading: true })
        this.setState({ text: text })
        axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then((response) => {
            this.setState({ users: response.data.items })

        })
        this.setState({ loading: false })

    }

    clearList = () => {
        this.setState({ users: [] })
        this.clearSearchForm()

    }


    clearSearchForm = () => {
        this.setState({ text: '' })
    }

    render() {
        console.log(this.props)

        return <div className='Users'>
            <Search searchUser={this.searchUser} clearSearchForm={this.clearSearchForm} value={this.state.text} />
            <div className='clear-field'>
                {this.state.users.length > 0 ? < ClearList clearList={this.clearList} /> : null}
            </div>

            <div className='user-container'>
                {this.state.loading ?
                    <div>Loading</div> :
                    <Fragment>
                        {this.state.users && this.state.users.map(user => <UserItem key={user.id} avatar={user.avatar_url} url={user.url} html_url={user.html_url} login={user.login} />)}
                    </Fragment>
                }
            </div>

        </div>
    }
}

export default Users