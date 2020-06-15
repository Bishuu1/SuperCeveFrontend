import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserTable from '../../components/UserTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import ConfirmModal from '../../components/common/Modal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((r) => {
          const dataUsers = r.results.map((user, index) => {
            return {
              name: user.name,
              email: user.url,
              id: index,
              type: 'Academico',
              searchValue: `${user.name} ${user.url}`,
            };
          });
          setUsers(dataUsers);
        });
    };
    fetchData();
  }, []);
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
        accessor: (user) => {
          return (
            <div>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ marginRight: '15px', cursor: 'pointer' }}
                onClick={() => setShowModal(true)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  history.push(`/usuarios/editar-usuario/${user.id}`);
                }}
              />
            </div>
          );
        },
        id: 'actions',
      },
    ],
    []
  );
  return (
    <Container fluid>
      <ConfirmModal
        title="Eliminar usuario"
        text="Esta seguro que quiere eliminar el usuario?"
        buttonText="Eliminar"
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
      />
      <Row>
        <Col sm={12}>
          <h1>Administracion de usuarios</h1>
        </Col>
        <Col>
          <UserTable data={users} columns={columns} dataPerPage={10} />
        </Col>
      </Row>
    </Container>
  );
};

export default Users;