import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserTable from '../../components/UserTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import ConfirmModal from '../../components/common/Modal';
import UsersAPI from './users-api';
import { USER_TYPE } from '../../data/userType';
import { showToast } from '../../components/common/Toast';
import { AppContext } from '../../app/AppContext';
const Users = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AppContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [deletedID, setDeletedID] = useState('');

  useEffect(() => {
    if (user.user?.NivelAcceso === 3) {
      history.push('/');
    } else {
      const fetchData = () => {
        UsersAPI.getUsers().then((response) => {
          const dataUsers = response.Usuarios.map((user, index) => {
            return {
              name: user.Nombre,
              email: user.CorreoUsuario,
              id: user._id,
              type: USER_TYPE[user.NivelAcceso],
              searchValue: `${user.Nombre} ${user.CorreoUsuario}`,
            };
          });
          setUsers(dataUsers);
        });
      };
      fetchData();
    }
  }, [deletedID, user]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Correo',
        accessor: 'email',
      },
      {
        Header: 'Tipo',
        accessor: 'type',
      },
      {
        accessor: (us) => {
          return (
            <div>
              {us.id !== user.user._id && (
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ marginRight: '15px', cursor: 'pointer' }}
                  onClick={() => {
                    setDeletedID(us.id);
                    setShowModal(true);
                  }}
                />
              )}
              <FontAwesomeIcon
                icon={faEdit}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  history.push(`/usuarios/editar-usuario/${us.id}`);
                }}
              />
            </div>
          );
        },
        id: 'actions',
      },
    ],
    [history]
  );
  return (
    <Container fluid>
      <ConfirmModal
        title="Eliminar usuario"
        buttonText="Eliminar"
        showModal={showModal}
        onCloseModal={() => {
          setDeletedID('');
          setShowModal(false);
        }}
        onSaveModal={() => {
          UsersAPI.deleteUser(deletedID)
            .then(() => {
              setDeletedID('');
              showToast({
                type: 'success',
                text: 'Se ha eliminado al usuario con éxito',
              });
              setShowModal(false);
            })
            .catch(() => {
              showToast({
                type: 'error',
                text: 'Error en la eliminación',
              });
            });
        }}
      >
        ¿Está seguro que quiere eliminar el usuario?
      </ConfirmModal>
      <Row>
        <Col sm={12}>
          <h1>Administración de usuarios</h1>
        </Col>
        <Col>
          <UserTable data={users} columns={columns} dataPerPage={10} />
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
