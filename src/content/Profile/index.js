import React from 'react';
import { Row, Form, Container, Card, Col, ListGroup,Button } from 'react-bootstrap';

const Profile = () => {
  return (
      
    <Container>
      <Row >
        <div class="col-md-8 offset-md-2">

          <Card>
            
                <div class="card-header bg-dark text-white ">
                  <Row>
                    <div class="card bg-dark text-white col-md-5" style={{border: "0pt"}} >
                      <h4>usuario@mail.udp.cl</h4>
                    </div>

                    <div class="card bg-dark col-md-3"  style={{border: "0pt"}} ></div>

                    <div class="card bg-dark text-white col-md-4"  style={{border: "0pt"}} >
                    <Button variant="link" style={{padding: "6px 16px"}}> Cambiar contraseña</Button>
                    </div>
                    
                  </Row>

                </div>
          


            <div class="card-body">

            <Form>
                  <Form.Group as={Row} controlId="Nombre">
                    <Form.Label column sm="3">
                      Nombre
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control  defaultValue="Juan contreras" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="rut">
                    <Form.Label column sm="3">Rut</Form.Label>
                    <Col sm="8">
                      <Form.Control  defaultValue="200245174" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="fecha de nacimiento">
                    <Form.Label column sm="3">Fecha de nacimiento</Form.Label>
                    <Col sm="8">
                      <Form.Control  defaultValue="16/09/1998" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="codigo de google scholar">
                      <Form.Label column sm="3">Código de google scholar</Form.Label>
                      <Col sm="8">
                        <Form.Control defaultValue="dfdfdf123123" />
                      </Col>
                      
                    </Form.Group>


            </Form>

            </div>

          </Card>
        </div>
      </Row>
    </Container>


  )
};

export default Profile;
