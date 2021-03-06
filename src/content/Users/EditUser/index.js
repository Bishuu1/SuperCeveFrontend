import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from '../../../components/common/forms/fields';
import { useHistory, useParams } from 'react-router-dom';
import UsersAPI from '../users-api';
import { showToast } from '../../../components/common/Toast';
import { AppContext } from '../../../app/AppContext';
import moment from 'moment';
const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  let { id } = useParams();
  const { user: User } = useContext(AppContext);

  useEffect(() => {
    if (User.user?.NivelAcceso === 3) {
    } else {
      const fetchData = async () => {
        UsersAPI.getUser(id).then((response) => {
          setUser(response.Usuario);
        });
      };
      fetchData();
    }
  }, [id, User]);

  const handleSubmit = (values) => {
    UsersAPI.updateUser(id, values)
      .then(() => {
        showToast({
          type: 'success',
          text: 'Se ha modificado al usuario con éxito',
        });
        // history.push('/usuarios');
      })
      .catch(() => {
        showToast({
          type: 'error',
          text: 'Error en la modificación',
        });
      })
      .finally(() => {
        history.push('/usuarios');
      });
  };
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 2 }}>
          <h1>Editar usuario</h1>
        </Col>
        <Col sm={{ span: 8, offset: 2 }}>
          {user && (
            <Formik
              initialValues={{
                Nombre: user.Nombre ? user.Nombre : '',
                NivelAcceso: user.NivelAcceso ? user.NivelAcceso : '',
                Contraseña: '',
                Rut: user.Rut ? user.Rut : '',
                FechaNacimiento: user.FechaNacimiento
                  ? moment(user.FechaNacimiento).format('DD/MM/YYYY')
                  : '',
                LinkGoogleScholar: user.LinkGoogleScholar
                  ? user.LinkGoogleScholar
                  : '',
                CorreoUsuario: user.CorreoUsuario ? user.CorreoUsuario : '',
              }}
              validationSchema={Yup.object({
                Nombre: Yup.string().required('Ingrese el nombre'),
                CorreoUsuario: Yup.string()
                  .email('Formato incorrecto')
                  .required('Ingrese usuario'),
                NivelAcceso: Yup.string().required(
                  'Escoja el nivel de accceso'
                ),
              })}
              onSubmit={handleSubmit}
            >
              <Form>
                <Row>
                  <Col sm={5}>
                    <Input type="text" name="Nombre" label="Nombre" />
                  </Col>
                  <Col sm={{ span: 5, offset: 2 }}>
                    <Input
                      type="text"
                      name="Contraseña"
                      label="Contraseña"
                      extra="Si deja vacío el campo no se modificará la contraseña."
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Select
                      type="select"
                      name="NivelAcceso"
                      label="Tipo de usuario"
                    >
                      <option value="1">Administrador</option>
                      <option value="2">Secretaria</option>
                      <option value="3">Académico</option>
                    </Select>
                  </Col>
                  <Col sm={{ span: 5, offset: 2 }}>
                    <Input type="text" name="Rut" label="Rut" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="FechaNacimiento"
                      label="Fecha nacimiento"
                    />
                  </Col>
                  <Col sm={{ span: 5, offset: 2 }}>
                    <Input
                      type="text"
                      name="LinkGoogleScholar"
                      label="Scholar ID"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ span: 5 }}>
                    <Input
                      type="text"
                      name="CorreoUsuario"
                      label="Correo electrónico"
                    />
                  </Col>
                  <Col sm={{ span: 5, offset: 2 }}>
                    <Row>
                      <Col xs={4} sm={4}>
                        <Button
                          type="button"
                          variant="outline-dark"
                          onClick={() => history.push('/usuarios')}
                        >
                          Volver
                        </Button>
                      </Col>
                      <Col xs={8} sm={{ span: 6, offset: 2 }}>
                        <Button type="submit">Crear usuario</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Formik>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
