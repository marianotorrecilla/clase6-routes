import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import React from 'react'

function Navegacion() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mx-auto mb-4" fixed="top">
            <Navbar.Brand>:: Mariano - Cristian (30-10-2020)</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item >
                        <NavLink to="/" exact style={{color:'gray'}} activeStyle={{ color: 'teal'}} className="m-5">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/personajes/" style={{color:'gray'}} activeStyle={{ color: 'teal'}} >Personajes</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navegacion

