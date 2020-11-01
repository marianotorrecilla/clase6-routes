import { Nav, Navbar } from 'react-bootstrap';

import React from 'react'
import './Navegacion.css'

function Footer() {
    return (

        <Navbar expand="lg" bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Brand className="navbar navbar-dark bg-dark" style={{color:'white' }}>
                    <h6>
                        TP perteneciente a Clase N°6 - Curso ReactJS UTN
                    </h6>
                </Navbar.Brand>
        </Navbar>

    )
}

export default Footer