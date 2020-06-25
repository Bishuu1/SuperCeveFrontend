import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import super_cv from '../../assets/images/super_cv.png';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';

const PrivateLayout = ({ children }) => {
  const { user } = useContext(AppContext);
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
        {user.user && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => history.push('/perfil')}>
                Perfil
              </Nav.Link>
              {user.user.NivelAcceso === 3 && (
                <Nav.Link onClick={() => history.push('/curriculum')}>
                  Curriculum
                </Nav.Link>
              )}
              {user.user.NivelAcceso === 3 && (
                <Nav.Link onClick={() => history.push('/conjunto-entradas')}>
                  Conjunto de entrada
                </Nav.Link>
              )}
              {user.user.NivelAcceso === 1 && (
                <Nav.Link onClick={() => history.push('/usuarios')}>
                  Usuarios
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() => {
                  window.sessionStorage.removeItem('user');
                  user.actions.cleanUser();
                  history.push('/login');
                }}
              >
                Cerrar sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>{' '}
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
