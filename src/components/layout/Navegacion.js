import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react'
import './Navegacion.css'

function Navegacion() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mx-auto mb-4" fixed="top">
            <Navbar.Brand> Mariano - Cristian (30-10-2020)</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item >
                        <NavLink to="/" exact style={{color:'gray'}} activeStyle={{ color: 'teal'}} className="m-3">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/personajes/" style={{color:'gray'}} activeStyle={{ color: 'teal'}} className="m-3" >Personajes</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navegacion

