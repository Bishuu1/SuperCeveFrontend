import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form } from 'formik';
import { Input } from '../../components/common/forms/fields';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import LoginAPI from './login-api';

const Login = () => {
  const history = useHistory();
  const handleSubmit = (values) => {
    console.log(values);
    LoginAPI.login(values).then((response) => {
      window.sessionStorage.setItem('user', JSON.stringify(response));
      history.push('/');
    });
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
          initialValues={{ CorreoUsuario: '', Contraseña: '' }}
          validationSchema={Yup.object().shape({
            CorreoUsuario: Yup.string().required('Usuario requerido'),
            Contraseña: Yup.string().required('Contraseña requerida'),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              type="text"
              placeholder="Correo electronico"
              name="CorreoUsuario"
              label="Usuario"
            />
            <Input
              type="password"
              placeholder="Correo electronico"
              name="Contraseña"
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
