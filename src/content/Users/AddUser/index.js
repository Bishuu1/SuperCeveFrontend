import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from '../../../components/common/forms/fields';
import { useHistory } from 'react-router-dom';
import UsersAPI from '../users-api';
import { showToast } from '../../../components/common/Toast';
const AddUser = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    UsersAPI.createUser(values)
      .then((response) => {
        showToast({
          type: 'success',
          text: 'Se ha guardado usuario con exito',
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
              Rut: Yup.string().required('Rut requerido'),
              FechaNacimiento: Yup.string().required(
                'Fecha de nacimiento requerida'
              ),
              LinkGoogleScholar: Yup.string().required('Ingrese id del perfil'),
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
                    <option value="1">Administrador</option>
                    <option value="2">Secretaria</option>
                    <option value="3">Academico</option>
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
                    label="Correo electronico"
                  />
                  <Row>
                    <Col sm={4}>
                      <Button
                        type="button"
                        variant="outline-dark"
                        onClick={() => history.push('/usuarios')}
                      >
                        Volver
                      </Button>
                    </Col>
                    <Col sm={{ span: 6, offset: 2 }}>
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
