import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import CartWidget from "./CartWidget";


export default function NavBar() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Monotienda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}