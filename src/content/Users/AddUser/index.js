import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from '../../../components/common/forms/fields';
import { useHistory } from 'react-router-dom';
import UsersAPI from '../users-api';
import { showToast } from '../../../components/common/Toast';
import { AppContext } from '../../../app/AppContext';
const AddUser = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);
  useEffect(() => {
    user.user?.NivelAcceso === 3 && history.push('/');
  }, [history, user]);
  const handleSubmit = (values) => {
    UsersAPI.createUser(values)
      .then((response) => {
        showToast({
          type: 'success',
          text: 'Se ha guardado usuario con éxito',
        });
        // history.push('/usuarios');
      })
      .catch(() => {
        showToast({
          type: 'error',
          text: 'Error al guardar usuario',
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
          <h1>Crear nuevo usuario</h1>
        </Col>
        <Col sm={{ span: 8, offset: 2 }}>
          <Formik
            initialValues={{
              Nombre: '',
              NivelAcceso: '',
              Contraseña: '',
              Rut: '',
              FechaNacimiento: '',
              LinkGoogleScholar: '',
              CorreoUsuario: '',
            }}
            validationSchema={Yup.object({
              Nombre: Yup.string().required('Ingrese el nombre'),
              CorreoUsuario: Yup.string()
                .email('Formato incorrecto')
                .required('Ingrese usuario'),
              Contraseña: Yup.string().required('Ingrese contraseña'),
              NivelAcceso: Yup.string().required('Escoja el nivel de accceso'),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <Row>
                <Col sm={5}>
                  <Input type="text" name="Nombre" label="Nombre" />
                </Col>
                <Col sm={{ span: 5, offset: 2 }}>
                  <Input type="text" name="Contraseña" label="Contraseña" />
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Select
                    type="select"
                    name="NivelAcceso"
                    label="Tipo de usuario"
                  >
                    <option value="">Seleccione tipo</option>
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
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
