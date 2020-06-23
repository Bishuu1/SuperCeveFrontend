import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form } from 'formik';
import { Input } from '../../components/common/forms/fields';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const handleSubmit = (values) => {
    window.sessionStorage.setItem('user', JSON.stringify(values));
    history.push('/');
  };
  return (
    <div
      style={{
        width: '290px',
        margin: 'auto',
        marginTop: '64px',
        boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)',
        borderRadius: '8px',
      }}
    >
      <FontAwesomeIcon icon={faSignInAlt} width={40} />
      <h2>Inicio de sesion</h2>
      <div style={{ marginTop: '16px', padding: '16px' }}>
        <Formik
          initialValues={{ name: '', password: '' }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Usuario requerido'),
            password: Yup.string().required('Contraseña requerida'),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              type="text"
              placeholder="Correo electronico"
              name="name"
              label="Usuario"
            />
            <Input
              type="password"
              placeholder="Correo electronico"
              name="password"
              label="Contraseña"
            />
            <Button variant="success" size="sm" type="submit">
              Ingresar
            </Button>{' '}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
