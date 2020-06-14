import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserTable from '../../components/UserTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((r) => {
          const dataUsers = r.results.map((user) => {
            return {
              name: user.name,
              email: user.url,
              type: 'Academico',
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
        accessor: () => {
          return (
            <div>
              <FontAwesomeIcon icon={faTrash} style={{ marginRight: '15px' }} />
              <FontAwesomeIcon icon={faEdit} />
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
