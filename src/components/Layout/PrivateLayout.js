import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import super_cv from '../../assets/images/super_cv.png';
import { Link } from 'react-router-dom';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ marginBottom: '50px' }}
      >
        <Navbar.Brand href="#home">
          {' '}
          <img
            src={super_cv}
            width="110"
            height="55"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/perfil">Perfil</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/curriculum">Curriculum</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/conjunto-entradas">Conjunto de entrada</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/usuarios">Usuarios</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{' '}
      <main>{children} </main>
    </>
  );
};

export default PrivateLayout;
