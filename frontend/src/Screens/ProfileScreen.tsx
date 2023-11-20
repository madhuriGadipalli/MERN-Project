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
import { updateUSer, fetchProfile } from "../Redux/actions/profile";
import { InfoMessage } from "../Components/InfoBar";

export const ProfileScreen = (location: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const profileInfo = useSelector((state: any) => state.profileInfo?.res);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password is not matching");
    } else if (name !== "" || email !== "" || password !== "") {
      dispatch(updateUSer({ name, email, password }));
    }
  };
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  useEffect(() => {
    if (profileInfo) {
      setName(profileInfo.name);
      setEmail(profileInfo.email);
    }
  }, [profileInfo]);
  return (
    <>
      <FormContainer>
        {profileInfo?.message && (
          <InfoMessage
            variant={
              profileInfo.email && profileInfo.message ? "success" : "danger"
            }
            message={profileInfo.message}
          />
        )}
        {message && <InfoMessage variant={"danger"} message={message} />}
        <Form onSubmit={submitHandler}>
          <h2>Update Details</h2>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
          <Form.Group controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-center mt-5">
            <Button type="submit" variant="primary">
              {"Submit"}
            </Button>
          </div>
        </Form>
        {/* <Row className="py-3 text-center">
          <Col>
            Already have account ?{" "}
            <Link to={redirect ? `/signin?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row> */}
      </FormContainer>
    </>
  );
};
