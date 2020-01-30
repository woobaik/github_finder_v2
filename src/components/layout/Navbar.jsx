import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Navbar.css'
import PropTypes from 'prop-types'

const NavBar = ({ title }) => {
    return <div className="Navbar">
        <nav>
            <div>
                <FaGithub /> {title}
            </div>
        </nav>
    </div>
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar