import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Input,
  Select,
  TextArea,
} from '../../../components/common/forms/fields';
import { useHistory } from 'react-router-dom';
const AddUser = () => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 2 }}>
          <h1>Crear nuevo usuario</h1>
        </Col>
        <Col sm={{ span: 8, offset: 2 }}>
          <Formik
            initialValues={{
              name: '',
              type: '',
              password: '',
              rut: '',
              birthDate: '',
              scholarID: '',
              description: '',
              email: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Ingrese el nombre'),
              email: Yup.string()
                .email('Formato incorrecto')
                .required('Ingrese usuario'),
              password: Yup.string().required('Ingrese contraseña'),
              type: Yup.string().required('Escoja el nivel de accceso'),
              rut: Yup.string().required('Rut requerido'),
              birthDate: Yup.string().required('Fecha de nacimiento requerida'),
              scholarID: Yup.string().required('Ingrese id del perfil'),
            })}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Row>
                <Col sm={5}>
                  <Input type="text" name="name" label="Nombre" />
                </Col>
                <Col sm={{ span: 5, offset: 2 }}>
                  <Input type="text" name="password" label="Contraseña" />
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Select type="select" name="type" label="Tipo de usuario">
                    <option value="1">Administrador</option>
                    <option value="1">Secretaria</option>
                    <option value="1">Academico</option>
                  </Select>
                </Col>
                <Col sm={{ span: 5, offset: 2 }}>
                  <Input type="text" name="rut" label="Rut" />
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <Input
                    type="text"
                    name="birthDate"
                    label="Fecha nacimiento"
                  />
                </Col>
                <Col sm={{ span: 5, offset: 2 }}>
                  <Input type="text" name="scholarID" label="Scholar ID" />
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <TextArea
                    type="text"
                    name="description"
                    label="Descripcion"
                  />
                </Col>
                <Col sm={{ span: 5, offset: 2 }}>
                  <Input type="text" name="email" label="Correo electronico" />
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
