import React, { useContext } from 'react';
import { Button, Tab, Nav, Form, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';
import Modal from '../../components/common/Modal';
import EntriesAPI from './entries-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { showToast } from '../../components/common/Toast';
import { Formik, Form as Forma } from 'formik';
import moment from 'moment';

import Moment from 'react-moment';
const SetEntries = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSetsModal, setShowDeleteSetsModal] = useState(false);
  const [showEntriesModal, setShowEntriesModal] = useState(false);
  const [showSetsModal, setShowSetsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [entries, setEntries] = useState([]);
  const [deletedID, setDeletedID] = useState(undefined);
  const [deletedSetID, setDeletedSetID] = useState(undefined);
  const [editedEntry, setEditedEntry] = useState([]);
  const [selectedSet, setSelectedSet] = useState(undefined);
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [sets, setSets] = useState([]);
  const [callApi, setCallApi] = useState(false);

  const { user } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    EntriesAPI.getEntries(user.user._id).then((response) =>
      setEntries(response.Entradas)
    );

    EntriesAPI.getSetEntries(user.user._id).then((response) => {
      setSets(response.Conjuntos);
      console.log(response.Conjuntos);
    });
    user?.NivelAcceso === 1 && history.push('/');
  }, [history, user, callApi]);

  const handleSubmit = (values) => {
    EntriesAPI.createEntry({
      ...values,
      FechaEntrada: values.FechaEntrada
        ? moment(values.FechaEntrada).format('YYYY/MM/DD')
        : '',
      Usuario: user.user._id,
    })
      .then(() => {
        setShowEntriesModal(false);
        setCallApi(!callApi);
        showToast({
          type: 'success',
          text: 'Se ha creado la nueva entrada correctamente',
        });
        // setShowSetsModal(false);
      })
      .catch(() =>
        showToast({
          type: 'error',
          text: 'Error en la creación de nueva entrada',
        })
      );
  };

  return (
    <>
      <Modal
        title="Eliminar Entrada"
        buttonText="Eliminar"
        showModal={showDeleteModal}
        onCloseModal={() => {
          setDeletedID(undefined);
          setShowDeleteModal(false);
        }}
        onSaveModal={() => {
          EntriesAPI.deleteEntrie(deletedID)
            .then(() => {
              setDeletedID(undefined);
              setShowDeleteModal(false);
              setCallApi(!callApi);

              showToast({
                type: 'success',
                text: 'Se ha eliminado la entrada con éxito',
              });
            })
            .catch(() => {
              setDeletedID(undefined);
              setShowDeleteModal(false);

              showToast({
                type: 'error',
                text: 'Error en la eliminacion',
              });
            });
        }}
      >
        ¿Esta seguro que quiere eliminar la entrada?
      </Modal>
      <Modal
        title="Eliminar conjunto"
        buttonText="Eliminar"
        showModal={showDeleteSetsModal}
        onCloseModal={() => {
          setDeletedSetID(undefined);
          setShowDeleteSetsModal(false);
        }}
        onSaveModal={() => {
          EntriesAPI.deleteSetEntry(deletedSetID)
            .then(() => {
              setDeletedSetID(undefined);
              setSelectedSet(undefined);
              setShowDeleteSetsModal(false);
              setCallApi(!callApi);

              showToast({
                type: 'success',
                text: 'Se ha eliminado el conjunto de entrada con éxito',
              });
            })
            .catch(() => {
              setDeletedSetID(undefined);
              setSelectedSet(undefined);
              setShowDeleteSetsModal(false);

              showToast({
                type: 'error',
                text: 'Error en la eliminacion',
              });
            });
        }}
      >
        ¿Esta seguro que quiere eliminar el conjunto?
      </Modal>
      <Modal
        title="Agregar conjunto"
        buttonText="Agregar"
        onCloseModal={() => setShowSetsModal(false)}
        showModal={showSetsModal}
      >
        <Container>
          <Formik
            initialValues={{ NombreConjuntoEntradas: '' }}
            onSubmit={(values) => {
              EntriesAPI.creatSetEntry({
                ...values,
                Usuario: user.user._id,
              })
                .then(() => {
                  showToast({
                    type: 'success',
                    text: 'Se ha creado el conjunto de entrada con éxito',
                  });
                  setCallApi(!callApi);
                  setShowSetsModal(false);
                })
                .catch(() => {
                  showToast({
                    type: 'error',
                    text: 'Error en la creacion del conjunto',
                  });
                  setCallApi(!callApi);
                  setShowSetsModal(false);
                });
            }}
          >
            {({ values, handleChange }) => (
              <Forma>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Nombre del conjunto</Form.Label>
                  <Form.Control
                    placeholder="Ingresar nombre"
                    name="NombreConjuntoEntradas"
                    value={values.NombreConjuntoEntradas}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Button type="submit">Guardar</Button>
                  </Col>
                </Row>
              </Forma>
            )}
          </Formik>
        </Container>
      </Modal>
      <Modal
        title="Agregar Entradas"
        buttonText="Agregar"
        onCloseModal={() => setShowEntriesModal(false)}
        showModal={showEntriesModal}
      >
        <Container>
          <Formik
            initialValues={{
              NombreEntrada: '',
              TipoEntrada: '',
              IntervaloPaginas: '',
              Autores: '',
              FechaEntrada: '',
              Revista: '',
              Volumen: '',
              NumeroTomo: '',
              Categoria: '',
              LugarObtenido: '',
              Institucion: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, resetForm, setFieldValue }) => {
              return (
                <Forma
                  onChange={(e) => {
                    if (e.target.name === 'TipoEntrada') {
                      resetForm({});
                      setFieldValue('TipoEntrada', e.target.value);
                    }
                  }}
                >
                  <Form.Group id="tipos">
                    <Form.Label>Tipo de entrada</Form.Label>
                    <Form.Control
                      as="select"
                      name="TipoEntrada"
                      value={values.TipoEntrada}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione</option>
                      <option value="Publicacion">Publicación</option>
                      <option value="Premio">Premio</option>
                      <option value="Conferencia">Conferencia</option>
                      <option value="Concurso">Concurso</option>
                    </Form.Control>
                  </Form.Group>
                  {values.TipoEntrada === 'Publicacion' && (
                    <>
                      <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Autores</Form.Label>
                            <Form.Control
                              name="Autores"
                              value={values.Autores}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Revista</Form.Label>
                            <Form.Control
                              name="Revista"
                              value={values.Revista}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Volumen</Form.Label>
                            <Form.Control
                              name="Volumen"
                              value={values.Volumen}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Tomo</Form.Label>
                            <Form.Control
                              name="NumeroTomo"
                              value={values.NumeroTomo}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo página</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  )}
                  {values.TipoEntrada === 'Premio' && (
                    <>
                      <Form.Group>
                        <Form.Label>Nombre del premio</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Lugar obtenido</Form.Label>
                            <Form.Control
                              name="LugarObtenido"
                              value={values.LugarObtenido}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          name="Categoria"
                          value={values.Categoria}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Institucion</Form.Label>
                        <Form.Control
                          name="Institucion"
                          value={values.Institucion}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada === 'Conferencia' && (
                    <>
                      <Form.Group>
                        <Form.Label>Nombre de la conferencia</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo paginas</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Autores</Form.Label>
                        <Form.Control
                          name="Autores"
                          value={values.Autores}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada === 'Concurso' && (
                    <>
                      <Form.Group>
                        <Form.Label>Concurso</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo paginas</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          name="Categoria"
                          value={values.Categoria}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada && (
                    <Row>
                      <Col>
                        <Button type="submit">Guardar</Button>
                      </Col>
                    </Row>
                  )}
                </Forma>
              );
            }}
          </Formik>
        </Container>
      </Modal>
      <Modal
        title="Modificar Entrada"
        buttonText="Agregar"
        showModal={showEditModal}
        onCloseModal={() => {
          setEditedEntry([]);
          setShowEditModal(false);
        }}
      >
        <Container>
          <Formik
            initialValues={{
              NombreEntrada: editedEntry.NombreEntrada,
              TipoEntrada: editedEntry.TipoEntrada,
              IntervaloPaginas: editedEntry.IntervaloPaginas,
              Autores: editedEntry.Autores,
              FechaEntrada: editedEntry.FechaEntrada
                ? moment(editedEntry.FechaEntrada).format('DD/MM/YYYY')
                : '',
              Revista: editedEntry.Revista,
              Volumen: editedEntry.Volumen,
              NumeroTomo: editedEntry.NumeroTomo,
              Categoria: editedEntry.Categoria,
              LugarObtenido: editedEntry.LugarObtenido,
              Institucion: editedEntry.Institucion,
            }}
            onSubmit={(values) => {
              EntriesAPI.updateEntry(
                {
                  ...values,
                  FechaEntrada: values.FechaEntrada
                    ? moment(values.FechaEntrada).format('YYYY/MM/DD')
                    : '',
                },
                editedEntry._id
              )
                .then(() => {
                  showToast({
                    type: 'success',
                    text: 'Se ha modificado la entrada con éxito',
                  });
                  setEditedEntry([]);
                  setCallApi(!callApi);
                  setShowEditModal(false);
                })
                .catch(() => {
                  showToast({
                    type: 'error',
                    text: 'Error en la modificacion de la entrada',
                  });
                  setEditedEntry([]);
                  setCallApi(!callApi);
                  setShowEditModal(false);
                });
            }}
          >
            {({ values, handleChange, resetForm, setFieldValue }) => {
              return (
                <Forma
                  onChange={(e) => {
                    if (e.target.name === 'TipoEntrada') {
                      resetForm({});
                      setFieldValue('TipoEntrada', e.target.value);
                    }
                  }}
                >
                  <Form.Group id="tipos">
                    <Form.Label>Tipo de entrada</Form.Label>
                    <Form.Control
                      as="select"
                      name="TipoEntrada"
                      value={values.TipoEntrada}
                      onChange={handleChange}
                      disabled={true}
                    >
                      <option value="">Seleccione</option>
                      <option value="Publicacion">Publicación</option>
                      <option value="Premio">Premio</option>
                      <option value="Conferencia">Conferencia</option>
                      <option value="Concurso">Concurso</option>
                    </Form.Control>
                  </Form.Group>
                  {values.TipoEntrada === 'Publicacion' && (
                    <>
                      <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Autores</Form.Label>
                            <Form.Control
                              name="Autores"
                              value={values.Autores}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Revista</Form.Label>
                            <Form.Control
                              name="Revista"
                              value={values.Revista}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Volumen</Form.Label>
                            <Form.Control
                              name="Volumen"
                              value={values.Volumen}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Tomo</Form.Label>
                            <Form.Control
                              name="NumeroTomo"
                              value={values.NumeroTomo}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo página</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  )}
                  {values.TipoEntrada === 'Premio' && (
                    <>
                      <Form.Group>
                        <Form.Label>Nombre del premio</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Lugar obtenido</Form.Label>
                            <Form.Control
                              name="LugarObtenido"
                              value={values.LugarObtenido}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          name="Categoria"
                          value={values.Categoria}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Institucion</Form.Label>
                        <Form.Control
                          name="Institucion"
                          value={values.Institucion}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada === 'Conferencia' && (
                    <>
                      <Form.Group>
                        <Form.Label>Nombre de la conferencia</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo paginas</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Autores</Form.Label>
                        <Form.Control
                          name="Autores"
                          value={values.Autores}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada === 'Concurso' && (
                    <>
                      <Form.Group>
                        <Form.Label>Concurso</Form.Label>
                        <Form.Control
                          name="NombreEntrada"
                          value={values.NombreEntrada}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                              name="FechaEntrada"
                              value={values.FechaEntrada}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Intervalo paginas</Form.Label>
                            <Form.Control
                              name="IntervaloPaginas"
                              value={values.IntervaloPaginas}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          name="Categoria"
                          value={values.Categoria}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  {values.TipoEntrada && (
                    <Row>
                      <Col>
                        <Button type="submit">Guardar</Button>
                      </Col>
                    </Row>
                  )}
                </Forma>
              );
            }}
          </Formik>
        </Container>
      </Modal>

      <div className="container-fluid mt-2 mt-4">
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <div className="card">
              <div className="card-header text-center bg-dark">
                <h6 className="text-white mt-1">
                  <strong>Conjunto de entradas</strong>
                </h6>

                <Button
                  variant="success"
                  style={{ padding: '5px 16px' }}
                  onClick={() => setShowSetsModal(true)}
                >
                  Agregar conjunto
                </Button>
                <Button
                  variant="primary"
                  className="mt-2"
                  title="Actualizar entradas"
                  style={{ padding: '5px 16px' }}
                  onClick={() => {
                    EntriesAPI.updateSetEntry(
                      { Entradas: selectedInputs },
                      selectedSet
                    )
                      .then(() => {
                        showToast({
                          type: 'success',
                          text:
                            'Se ha modificado el conjunto de entrada con éxito',
                        });
                        setCallApi(!callApi);
                      })
                      .catch(() => {
                        showToast({
                          type: 'error',
                          text: 'Error en la modificacion del conjunto',
                        });
                        setCallApi(!callApi);
                      });
                  }}
                  disabled={!selectedSet}
                >
                  Actualizar conjunto
                </Button>
                <Button
                  variant="danger"
                  className="mt-2"
                  style={{ padding: '5px 16px' }}
                  onClick={() => setShowDeleteSetsModal(true)}
                  disabled={!deletedSetID}
                >
                  Eliminar conjunto
                </Button>
              </div>

              <div className="table-responsive">
                <div
                  className="table-wrapper-scroll-y mb-3"
                  style={{
                    position: 'relative',
                    height: '400px',
                    width: '100%',
                    overflow: 'auto',
                  }}
                >
                  <div className="container">
                    <Tab.Container id="left-tabs-example">
                      <Nav variant="pills" className="flex-column">
                        {sets.map((set, index) => {
                          return (
                            <Nav.Item
                              key={index}
                              onClick={() => {
                                console.log(set);
                                setSelectedSet(set._id);
                                setDeletedSetID(set._id);
                                setSelectedInputs(set.Entradas);
                              }}
                            >
                              <Nav.Link
                                eventKey={index}
                                style={{
                                  height: '4rem',
                                  border: '1px solid',
                                  borderColor: 'rgba(0, 0, 0, 0.125)',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                }}
                              >
                                {set.NombreConjuntoEntradas}
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                      </Nav>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-7">
            <div className="card">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-fabricantes_modelos"
                  role="tabpanel"
                  aria-labelledby="list-fabricantes_modelos-list"
                >
                  <div className="card">
                    <div className="card-header bg-dark">
                      <div className="row">
                        <div className="col col-md-8 text-left">
                          <div className="mb-0">
                            <h5 className="modal-title text-white w-100">
                              <strong>Entradas</strong>
                            </h5>
                          </div>
                        </div>
                        <div className="col col-md-4 text-right">
                          <div className="mb-0">
                            <Button
                              onClick={() => setShowEntriesModal(true)}
                              variant="success"
                              title="Agregar Entrada"
                            >
                              Agregar
                            </Button>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          className="table-wrapper-scroll-y mb-3"
                          style={{
                            position: 'relative',
                            height: '400px',
                            width: '100%',
                            overflow: 'auto',
                          }}
                        >
                          <h5>Publicaciones</h5>
                          <table
                            className="table"
                            style={{ minWidth: 'max-content', width: '100%' }}
                          >
                            <thead>
                              <tr>
                                <th scope="col">
                                  {' '}
                                  <Form.Check
                                    id="defaultChecked"
                                    aria-label="all"
                                    onChange={(e) => {
                                      const newInputs = entries
                                        .filter((entrie) => {
                                          if (
                                            entrie.TipoEntrada === 'Publicacion'
                                          ) {
                                            return entrie._id;
                                          } else {
                                            return false;
                                          }
                                        })
                                        .map((e) => {
                                          return e._id;
                                        });
                                      if (e.target.checked) {
                                        setSelectedInputs([
                                          ...selectedInputs,
                                          ...newInputs,
                                        ]);
                                      } else {
                                        const newNewInputs = selectedInputs.filter(
                                          function (el) {
                                            return newInputs.indexOf(el) < 0;
                                          }
                                        );
                                        setSelectedInputs([...newNewInputs]);
                                      }
                                    }}
                                  />
                                </th>

                                <th scope="col">Título de Publicación</th>
                                <th scope="col">Autores</th>
                                <th scope="col">Revista</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Volumen</th>
                                <th scope="col">Tomo</th>
                                <th scope="col">Intervalo página</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {entries.map((entrie, index) => {
                                return entrie.TipoEntrada === 'Publicacion' ? (
                                  <tr key={index}>
                                    <th scope="col">
                                      {' '}
                                      <Form.Check
                                        aria-label="option 1"
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setSelectedInputs([
                                              ...selectedInputs,
                                              entrie._id,
                                            ]);
                                          } else {
                                            const newInputs = selectedInputs.filter(
                                              (element) => {
                                                return !(
                                                  element === entrie._id
                                                );
                                              }
                                            );
                                            setSelectedInputs(newInputs);
                                          }
                                        }}
                                        checked={selectedInputs.includes(
                                          entrie._id
                                        )}
                                      />
                                    </th>
                                    <td>{entrie.NombreEntrada}</td>
                                    <td>{entrie.Autores}</td>
                                    <td>{entrie.Revista}</td>
                                    <td>
                                      {entrie.FechaEntrada !== null ? (
                                        <Moment format="D MMM YYYY" withTitle>
                                          {entrie.FechaEntrada}
                                        </Moment>
                                      ) : (
                                        'Sin fecha'
                                      )}
                                    </td>
                                    <td>{entrie.Volumen}</td>
                                    <td>{entrie.NumeroTomo}</td>
                                    <td>{entrie.IntervaloPaginas}</td>
                                    <td>
                                      <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        cursor="pointer"
                                        style={{ marginRight: '10px' }}
                                        onClick={() => {
                                          setDeletedID(entrie._id);
                                          setShowDeleteModal(true);
                                        }}
                                      />
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        cursor="pointer"
                                        onClick={() => {
                                          EntriesAPI.getEntry(entrie._id).then(
                                            (response) => {
                                              setCallApi(!callApi);
                                              setEditedEntry(response.Entrada);
                                              setShowEditModal(true);
                                            }
                                          );
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ) : null;
                              })}
                            </tbody>
                          </table>
                          <h5>Premios</h5>
                          <table
                            className="table"
                            style={{ minWidth: 'max-content', width: '100%' }}
                          >
                            <thead>
                              <tr>
                                <th scope="col">
                                  {' '}
                                  <Form.Check
                                    aria-label="all"
                                    onChange={(e) => {
                                      const newInputs = entries
                                        .filter((entrie) => {
                                          if (entrie.TipoEntrada === 'Premio') {
                                            return entrie._id;
                                          } else {
                                            return false;
                                          }
                                        })
                                        .map((e) => {
                                          return e._id;
                                        });
                                      if (e.target.checked) {
                                        setSelectedInputs([
                                          ...selectedInputs,
                                          ...newInputs,
                                        ]);
                                      } else {
                                        const newNewInputs = selectedInputs.filter(
                                          function (el) {
                                            return newInputs.indexOf(el) < 0;
                                          }
                                        );
                                        setSelectedInputs([...newNewInputs]);
                                      }
                                    }}
                                  />
                                </th>
                                <th scope="col">Premio</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Lugar obtenido</th>
                                <th scope="col">Institución</th>
                              </tr>
                            </thead>
                            <tbody>
                              {entries.map((entrie, index) => {
                                return entrie.TipoEntrada === 'Premio' ? (
                                  <tr key={index}>
                                    <th scope="col">
                                      {' '}
                                      <Form.Check
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setSelectedInputs([
                                              ...selectedInputs,
                                              entrie._id,
                                            ]);
                                          } else {
                                            const newInputs = selectedInputs.filter(
                                              (element) => {
                                                return !(
                                                  element === entrie._id
                                                );
                                              }
                                            );
                                            setSelectedInputs(newInputs);
                                          }
                                        }}
                                        checked={selectedInputs.includes(
                                          entrie._id
                                        )}
                                      />
                                    </th>
                                    <td>{entrie.NombreEntrada}</td>
                                    <td>
                                      {entrie.FechaEntrada !== null ? (
                                        <Moment format="D MMM YYYY" withTitle>
                                          {entrie.FechaEntrada}
                                        </Moment>
                                      ) : (
                                        'Sin fecha'
                                      )}
                                    </td>
                                    <td>{entrie.Categoria}</td>
                                    <td>{entrie.LugarObtenido}</td>
                                    <td>{entrie.Institucion}</td>
                                    <td>
                                      <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        style={{ marginRight: '10px' }}
                                        cursor="pointer"
                                        onClick={() => {
                                          setDeletedID(entrie._id);
                                          setShowDeleteModal(true);
                                        }}
                                      />
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        cursor="pointer"
                                        onClick={() => {
                                          EntriesAPI.getEntry(entrie._id).then(
                                            (response) => {
                                              setCallApi(!callApi);
                                              setEditedEntry(response.Entrada);
                                              setShowEditModal(true);
                                            }
                                          );
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ) : null;
                              })}
                            </tbody>
                          </table>

                          <h5>Conferencias</h5>
                          <table
                            className="table"
                            style={{ minWidth: 'max-content', width: '100%' }}
                          >
                            <thead>
                              <tr>
                                <th scope="col">
                                  {' '}
                                  <Form.Check
                                    aria-label="all"
                                    onChange={(e) => {
                                      const newInputs = entries
                                        .filter((entrie) => {
                                          if (
                                            entrie.TipoEntrada === 'Conferencia'
                                          ) {
                                            return entrie._id;
                                          } else {
                                            return false;
                                          }
                                        })
                                        .map((e) => {
                                          return e._id;
                                        });
                                      if (e.target.checked) {
                                        setSelectedInputs([
                                          ...selectedInputs,
                                          ...newInputs,
                                        ]);
                                      } else {
                                        const newNewInputs = selectedInputs.filter(
                                          function (el) {
                                            return newInputs.indexOf(el) < 0;
                                          }
                                        );
                                        setSelectedInputs([...newNewInputs]);
                                      }
                                    }}
                                  />
                                </th>
                                <th scope="col">Nombre conferencia</th>
                                <th scope="col">Autores</th>
                                <th scope="col">Intervalo página</th>
                                <th scope="col">Fecha</th>
                              </tr>
                            </thead>
                            <tbody>
                              {entries.map((entrie, index) => {
                                return entrie.TipoEntrada === 'Conferencia' ? (
                                  <tr key={index}>
                                    <th scope="col">
                                      {' '}
                                      <Form.Check
                                        aria-label="option 1"
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setSelectedInputs([
                                              ...selectedInputs,
                                              entrie._id,
                                            ]);
                                          } else {
                                            const newInputs = selectedInputs.filter(
                                              (element) => {
                                                return !(
                                                  element === entrie._id
                                                );
                                              }
                                            );
                                            setSelectedInputs(newInputs);
                                          }
                                        }}
                                        checked={selectedInputs.includes(
                                          entrie._id
                                        )}
                                      />
                                    </th>
                                    <td>{entrie.NombreEntrada}</td>
                                    <td>{entrie.Autores}</td>
                                    <td>{entrie.IntervaloPaginas}</td>
                                    <td>
                                      {entrie.FechaEntrada !== null ? (
                                        <Moment format="D MMM YYYY" withTitle>
                                          {entrie.FechaEntrada}
                                        </Moment>
                                      ) : (
                                        'Sin fecha'
                                      )}
                                    </td>
                                    <td>
                                      <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        style={{ marginRight: '10px' }}
                                        cursor="pointer"
                                        onClick={() => {
                                          setDeletedID(entrie._id);
                                          setShowDeleteModal(true);
                                        }}
                                      />
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        cursor="pointer"
                                        onClick={() => {
                                          EntriesAPI.getEntry(entrie._id).then(
                                            (response) => {
                                              setCallApi(!callApi);
                                              setEditedEntry(response.Entrada);
                                              setShowEditModal(true);
                                            }
                                          );
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ) : null;
                              })}
                            </tbody>
                          </table>

                          <h5>Concursos</h5>
                          <table
                            className="table"
                            style={{ minWidth: 'max-content', width: '100%' }}
                          >
                            <thead>
                              <tr>
                                <th scope="col">
                                  {' '}
                                  <Form.Check
                                    aria-label="all"
                                    onChange={(e) => {
                                      const newInputs = entries
                                        .filter((entrie) => {
                                          if (
                                            entrie.TipoEntrada === 'Concurso'
                                          ) {
                                            return entrie._id;
                                          } else {
                                            return false;
                                          }
                                        })
                                        .map((e) => {
                                          return e._id;
                                        });
                                      if (e.target.checked) {
                                        setSelectedInputs([
                                          ...selectedInputs,
                                          ...newInputs,
                                        ]);
                                      } else {
                                        const newNewInputs = selectedInputs.filter(
                                          function (el) {
                                            return newInputs.indexOf(el) < 0;
                                          }
                                        );
                                        setSelectedInputs([...newNewInputs]);
                                      }
                                    }}
                                  />
                                </th>
                                <th scope="col">Concurso</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Intervalo página</th>
                              </tr>
                            </thead>
                            <tbody>
                              {entries.map((entrie, index) => {
                                return entrie.TipoEntrada === 'Concurso' ? (
                                  <tr key={index}>
                                    <th scope="col">
                                      {' '}
                                      <Form.Check
                                        aria-label="option 1"
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setSelectedInputs([
                                              ...selectedInputs,
                                              entrie._id,
                                            ]);
                                          } else {
                                            const newInputs = selectedInputs.filter(
                                              (element) => {
                                                return !(
                                                  element === entrie._id
                                                );
                                              }
                                            );
                                            setSelectedInputs(newInputs);
                                          }
                                        }}
                                        checked={selectedInputs.includes(
                                          entrie._id
                                        )}
                                      />
                                    </th>
                                    <td>{entrie.NombreEntrada}</td>
                                    <td>
                                      {entrie.FechaEntrada !== null ? (
                                        <Moment format="D MMM YYYY" withTitle>
                                          {entrie.FechaEntrada}
                                        </Moment>
                                      ) : (
                                        'Sin fecha'
                                      )}
                                    </td>
                                    <td>{entrie.Categoria}</td>
                                    <td>{entrie.IntervaloPagina}</td>
                                    <td>
                                      <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        cursor="pointer"
                                        style={{ marginRight: '10px' }}
                                        onClick={() => {
                                          setDeletedID(entrie._id);
                                          setShowDeleteModal(true);
                                        }}
                                      />
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        cursor="pointer"
                                        onClick={() => {
                                          EntriesAPI.getEntry(entrie._id).then(
                                            (response) => {
                                              setCallApi(!callApi);
                                              setEditedEntry(response.Entrada);
                                              setShowEditModal(true);
                                            }
                                          );
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ) : null;
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetEntries;
