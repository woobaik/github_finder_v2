import React, { Component } from 'react'
import axios from 'axios'
import UserItem from './UserItem'
import './Users.css'

class Users extends Component {
    state = {
        users: [],
        loading: true
    }
    componentDidMount() {

        axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then((response) => {
            this.setState({ users: response.data })
        })
        this.setState({ loading: false })

    }
    render() {


        return <div className='Users'>
            {this.state.loading ?
                <div>Loading</div> :
                this.state.users.map(user => <UserItem key={user.id} avatar={user.avatar_url} url={user.url} html_url={user.html_url} />)}

        </div>
    }

}

export default Users