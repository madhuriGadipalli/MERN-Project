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
import { saveShippingAddress } from "../Redux/actions/shipping";
import { InfoMessage } from "../Components/InfoBar";
import { NavigationItems } from "../Components/NavigationItems";

export const ShippingScreen = (location: any) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const registerInfo = useSelector((state: any) => state.registerInfo?.res);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
    // if (password !== confirmPassword) {
    //   setMessage("Password is not matching");
    // } else {
    //   dispatch(createUSer({ name, email, password }));
    // }
  };

  return (
    <FormContainer>
      {/* {registerInfo?.message && (
        <InfoMessage variant={"danger"} message={registerInfo.message} />
      )}
      {message && <InfoMessage variant={"danger"} message={message} />} */}
      <NavigationItems step1 step2 />
      <Form onSubmit={submitHandler}>
        <h3>Shipping</h3>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center mt-5">
          <Button type="submit" variant="primary">
            {"Continue Payment"}
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
};
