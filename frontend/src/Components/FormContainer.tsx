import React from "react";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  ListGroupItem,
  Card,
  Form,
  Container,
} from "react-bootstrap";

export const FormContainer = ({ children }: any) => {
  return (
    <Container className=" mt-5">
      <Row className="Justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
