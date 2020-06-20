import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import super_cv from '../../assets/images/super_cv.png';
import { useHistory } from 'react-router-dom';

const PrivateLayout = ({ children }) => {
  const history = useHistory();
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
            <Nav.Link onClick={() => history.push('/perfil')}>Perfil</Nav.Link>
            <Nav.Link onClick={() => history.push('/curriculum')}>
              Curriculum
            </Nav.Link>
            <Nav.Link onClick={() => history.push('/conjunto-entradas')}>
              Conjunto de entrada
            </Nav.Link>
            <Nav.Link onClick={() => history.push('/usuarios')}>
              Usuarios
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{' '}
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
