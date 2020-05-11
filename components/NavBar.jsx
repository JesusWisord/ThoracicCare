import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import styles from './styles/NavBar.module.css';

export default function NavBar() {
  return (
    <Navbar className={`${styles.headerNav} navbar navbar-dark pt-3 pb-3`} expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Servicios</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <Nav.Link href="#link">Especialidades</Nav.Link>
          <Nav.Link href="#link">Ubicación</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
