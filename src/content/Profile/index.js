import React, { useContext } from 'react';
import {
  Row,
  Form,
  Container,
  Card,
  Col,
  ListGroup,
  Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { AppContext } from '../../app/AppContext';
import UsersAPI from '../Users/users-api';
import { useHistory } from 'react-router-dom';
import { showToast } from '../../components/common/Toast';

const Profile = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      Nombre: user?.user.Nombre,
      Rut: user?.user.Rut,
      FechaNacimiento: user?.user.FechaNacimiento,
      LinkGoogleScholar: user?.user.LinkGoogleScholar,
    },
    onSubmit: (values) => {
      UsersAPI.updateUser(user.user._id, values)
        .then((response) => response.UsuarioUpdated)
        .then((us) => {
          console.log(us);
          user.actions.setUser({
            CorreoUsuario: us.CorreoUsuario,
            FechaNacimiento: us.FechaNacimiento,
            LinkGoogleScholar: us.LinkGoogleScholar,
            NivelAcceso: us.NivelAcceso,
            Nombre: us.Nombre,
            Rut: us.Rut,
            _id: us._id,
          });
          showToast({
            type: 'success',
            text: 'Perfil modificado correctamente',
          });
          history.push('/');
        })
        .catch(() =>
          showToast({
            type: 'error',
            text: 'Error al modificar perfil',
          })
        );
    },
  });
  return (
    <Container>
      <Row>
        <div className="col-md-8 offset-md-2">
          <Card>
            <div className="card-header bg-dark text-white ">
              <Row>
                <div
                  className="card bg-dark text-white col-md-5"
                  style={{ border: '0pt' }}
                >
                  <h4>usuario@mail.udp.cl</h4>
                </div>

                <div
                  className="card bg-dark col-md-3"
                  style={{ border: '0pt' }}
                ></div>

                <div
                  className="card bg-dark text-white col-md-4"
                  style={{ border: '0pt' }}
                >
                  <Button
                    variant="link"
                    style={{ padding: '6px 16px' }}
                    onClick={formik.handleSubmit}
                  >
                    {' '}
                    Cambiar contraseña
                  </Button>
                </div>
              </Row>
            </div>

            <div className="card-body">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} controlId="Nombre">
                  <Form.Label column sm="3">
                    Nombre
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name="Nombre"
                      onChange={formik.handleChange}
                      value={formik.values.Nombre}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="rut">
                  <Form.Label column sm="3">
                    Rut
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name="Rut"
                      onChange={formik.handleChange}
                      value={formik.values.Rut}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Fecha de nacimiento
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name="FechaNacimiento"
                      onChange={formik.handleChange}
                      value={formik.values.FechaNacimiento}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Código de google scholar
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name="LinkGoogleScholar"
                      onChange={formik.handleChange}
                      value={formik.values.LinkGoogleScholar}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Profile;
