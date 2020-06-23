import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PublicLayout = ({ children }) => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row align="center" className="layout-public__container">
        <Col sm={12}>{children}</Col>
      </Row>
    </Container>
  );
};

export default PublicLayout;
