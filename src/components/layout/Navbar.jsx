import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Navbar.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBar = ({ title }) => {
    return <div className="Navbar">
        <nav>
            <Link to='/' >
                <FaGithub /> {title}
            </Link>

            <div>
                <Link to='/about'>ABOUT</Link>
            </div>
        </nav>
    </div>
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar