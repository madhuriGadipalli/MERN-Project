import React, { useState, useEffect, FormEvent } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  ListGroupItem,
  Card,
  Form,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormContainer } from "../Components/FormContainer";
import { fetchLogin } from "../Redux/actions/signIn";
import { InfoMessage } from "../Components/InfoBar";

export const SignInScreen = (location: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInfo = useSelector((state: any) => state.signInInfo?.res);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };
  useEffect(() => {
    if (signInfo.token) {
      navigate(redirect);
    }
  }, [signInfo]);
  return (
    <FormContainer>
      {signInfo?.message && (
        <InfoMessage variant={"danger"} message={signInfo.message} />
      )}

      <Form onSubmit={submitHandler}>
        <h2>Sign In</h2>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center mt-5">
          <Button type="submit" variant="primary">
            {"Sign In"}
          </Button>
        </div>
      </Form>
      <Row className="py-3 text-center">
        <Col>
          New User ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
