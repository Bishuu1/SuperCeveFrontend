import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PublicLayout = ({ children }) => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row nogutter align="center" className="layout-public__container">
        <Col sm={12} md={6} lg={4} xl={3} offset={{ xl: 1 }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default PublicLayout;
