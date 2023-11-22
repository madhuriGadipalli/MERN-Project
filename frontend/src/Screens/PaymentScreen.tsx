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
import { savePaymentType } from "../Redux/actions/payment";
import { InfoMessage } from "../Components/InfoBar";
import { NavigationItems } from "../Components/NavigationItems";

export const PaymentScreen = (location: any) => {
  const [payment, setPaymentMethod] = useState("paypal");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const registerInfo = useSelector((state: any) => state.registerInfo?.res);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Password is not matching");
    // } else {
    //   dispatch(createUSer({ name, email, password }));
    // }
    await dispatch(savePaymentType(payment));
    navigate("/ordersummary");
  };

  return (
    <FormContainer>
      {/* {registerInfo?.message && (
        <InfoMessage variant={"danger"} message={registerInfo.message} />
      )}
      {message && <InfoMessage variant={"danger"} message={message} />} */}
      <NavigationItems step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <h3>Payment</h3>

        <Form.Group>
          <Form.Label as="legend">{"Select Payment Method"}</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              name="paymentMethod"
              label="Paypal or Credit card"
              id="paypal"
              value="paypal"
              checked
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setPaymentMethod((event.target as HTMLInputElement).value)
              }
            />
            <Form.Check
              type="radio"
              name="paymentMethod"
              label="Phone Pay"
              id="phonePay"
              value="phonePay"
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setPaymentMethod((event.target as HTMLInputElement).value)
              }
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center mt-5">
          <Button type="submit" variant="primary">
            {"Continue"}
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
};
