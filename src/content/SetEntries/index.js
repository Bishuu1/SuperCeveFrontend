import React from "react";
import { Button, Tab, Nav, Form, Row, Col, Modal, Container} from "react-bootstrap";
import ConfirmModal from '../../components/common/Modal';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SetEntries = () => {

  const [show, setShow] = useState([]);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const [modalShow, setModalShow] = useState(false); // estare repitiendo variable ? si

  function ModalAgregarConjunto(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar conjunto
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">

          <Container>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del conjunto</Form.Label>
                <Form.Control placeholder="Ingresar nombre" />
              </Form.Group>
            </Form>
          </Container>

        </Modal.Body>

        <Modal.Footer>
          <Button  variant="secondary" onClick={props.onHide}>Cerrar</Button>
          <Button onClick={props.onHide}>Agregar</Button>
        </Modal.Footer>
        
      </Modal>
    );
  }

  function ModalAgregarEntrada(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar Entrada
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container>

                <Form.Group id="tipos" onChange= "mostrar(this.value)">
                  <Form.Label>Tipo de entrada</Form.Label>
                  <Form.Control as="select" onChange="">
                    <option value="publicacion">Publicación</option>
                    <option value="premio">Premio</option>
                    <option value="conferencia">Conferencia</option>
                    <option value="concurso">Concurso</option>
                  </Form.Control>
                </Form.Group>

              <Form.Group id="fecha"  >
                <Form.Label>fecha</Form.Label>
                <Form.Control placeholder="fecha" />
              </Form.Group>


          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button  variant="secondary" onClick={props.onHide}>Cerrar</Button>
          <Button onClick={props.onHide}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
 
    <>
    <ConfirmModal
    title="Eliminar Entrada"
    text="¿Esta seguro que quiere eliminar la entrada?"
    buttonText="Eliminar"
    showModal={showModal}
    onCloseModal={() => setShowModal(false)}
  />

    <div class="container-fluid mt-2 mt-4">
      <div class="row">
        <div class="col-md-3 col-sm-5">
          <div class="card">

            <div class="card-header text-center bg-dark">
              <h6 class="text-white mt-1">
                <strong>Conjunto de entradas</strong>
              </h6>
              
              <Button variant="success" style={{padding: "5px 16px"}} onClick={() => setModalShow(true)}>
                Agregar conjunto
              </Button>

              <ModalAgregarConjunto show={modalShow} onHide={() => setModalShow(false)} />

            </div>

            <div class="table-responsive">
              <div
                class="table-wrapper-scroll-y mb-3"
                style={{
                  position: "relative",
                  height: "400px",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <div class="container">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="1"
                  >
                    <Nav variant="pills" className="flex-column">

                      <Nav.Item>
                        <Nav.Link
                          style={{
                            height: "4rem",
                            border: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.125)",
                            marginTop: "12px",
                            marginBottom: "12px",
                          }}
                          eventKey="1"
                        >
                          Conjunto de entrada 1
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item class="card bg-light">
                        <Nav.Link
                          style={{
                            height: "4rem",
                            border: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.125)",
                            marginTop: "12px",
                            marginBottom: "12px",
                          }}
                          eventKey="2"
                        >
                          conjunto de entrada 2
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item class="card bg-light">
                        <Nav.Link
                          style={{
                            height: "4rem",
                            border: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.125)",
                            marginTop: "12px",
                            marginBottom: "12px",
                          }}
                          eventKey="3"
                        >
                          conjunto de entrada 3
                        </Nav.Link>
                      </Nav.Item>


                    </Nav>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-9 col-sm-7">
          <div class="card">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-fabricantes_modelos"
                role="tabpanel"
                aria-labelledby="list-fabricantes_modelos-list"
              >
                <div class="card">
                  <div class="card-header bg-dark">
                    <div class="row">
                      <div class="col col-md-8 text-left">
                        <h5 class="mb-0">
                          <h5 class="modal-title text-white w-100">
                            <strong>Entradas</strong>
                          </h5>
                        </h5>
                      </div>
                      <div class="col col-md-4 text-right">
                        <h5 class="mb-0">
                          <Button
                            onClick={() => setModalShow(true)}
                            variant="success"
                            title="Agregar Entrada"
                          >
                            Agregar
                          </Button>{" "}
                          <ModalAgregarEntrada show={modalShow} onHide={() => setModalShow(false)} />

                          <Button
                            variant="danger"
                            title="Actualizar entradas"

                          >Actualizar entradas</Button>
                          
                        </h5>
                          


                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <div
                        class="table-wrapper-scroll-y mb-3"
                        style={{
                          position: "relative",
                          height: "400px",
                          width: "100%",
                          overflow: "auto",
                        }}
                      >
                        <h5>Publicaciones</h5>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check
                                  id="defaultChecked"
                                  aria-label="all"
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
                            <tr>
                              <th scope="col" isValid="true">
                                {" "}
                                <Form.Check aria-label="option 1" />
                              </th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                              <td>
                                <a href="#wea">
                                  <svg
                                    class="bi bi-pencil-square"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                      fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                  </svg>
                                </a>

                                <a href="#wea" style={{ marginLeft: "3px" }}>
                                  <svg
                                    class="bi bi-trash-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => setShowModal(true)}
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                    />
                                  </svg>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="option 2" />{" "}
                              </th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>@fat</td>
                              <td>@fat</td>
                              <td>@fat</td>
                              <td>@fat</td>
                              <td>
                                <a href="#wea">
                                  <svg
                                    class="bi bi-pencil-square"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                      fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                  </svg>
                                </a>

                                <a href="#wea" style={{ marginLeft: "3px" }}>
                                  <svg
                                    class="bi bi-trash-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                    />
                                  </svg>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="option 3" />{" "}
                              </th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>
                                <a href="#wea">
                                  <svg
                                    class="bi bi-pencil-square"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                      fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                  </svg>
                                </a>

                                <a href="#wea" style={{ marginLeft: "3px" }}>
                                  <svg
                                    class="bi bi-trash-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                    />
                                  </svg>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h5>Premios</h5>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="all" />
                              </th>
                              <th scope="col">Premio</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Categoría</th>
                              <th scope="col">Lugar obtenido</th>
                              <th scope="col">Institución</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="1" />{" "}
                              </th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="2" />{" "}
                              </th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="3" />{" "}
                              </th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>

                        <h5>Conferencias</h5>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="all" />
                              </th>
                              <th scope="col">Nombre conferencia</th>
                              <th scope="col">Autores</th>
                              <th scope="col">Intervao página</th>
                              <th scope="col">Fecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="1" />{" "}
                              </th>
                              <th>1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="2" />
                              </th>
                              <th>2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="3" />
                              </th>
                              <th>3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>

                        <h5>Concursos</h5>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="all" />
                              </th>
                              <th scope="col">Concurso</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Categoría</th>
                              <th scope="col">Intervalo página</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="1" />
                              </th>
                              <th>1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="2" />
                              </th>
                              <th>2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="col">
                                {" "}
                                <Form.Check aria-label="3" />
                              </th>
                              <th>3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
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
