import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/question" className="nav-link">Cuestionario friki</Link>
                <Link to="/about" className="nav-link">Sobre el formulario</Link>
            </Nav>
        )
    }
}