import React, { useState, useEffect } from "react";
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
import { PayPalButton } from "react-paypal-button-v2";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { NavigationItems } from "../Components/NavigationItems";
import { InfoMessage } from "../Components/InfoBar";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../Redux/actions/placeOrder";
import { getPaypalSecretKey } from "../Redux/actions/common";
import {
  getorderDeatils,
  payOrder,
  payOrderReset,
} from "../Redux/actions/Order";

interface Product {
  name: string;
  qty: string | undefined;
  image: string;
  price: string;
  quantity?: string;
}

export const OrderScreen = ({ match }: any) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);

  const paypalSecretKey = useSelector(
    (state: any) => state.Commons?.paypalSecretKey
  );
  const OrderDet = useSelector((state: any) => state.OrderInfo);
  const OrderInfo = OrderDet.order;

  useEffect(() => {
    dispatch(getPaypalSecretKey());
    dispatch(getorderDeatils({ id }));
  }, []);

  useEffect(() => {
    function injectSdk() {
      if (paypalSecretKey) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.paypal.com/sdk/js?client-id=${paypalSecretKey}`;
        script.async = true;
        script.onload = () => setSdkReady(true);
        document.body.appendChild(script);
      }
    }
    if (!OrderInfo || OrderDet.success) {
      dispatch(getorderDeatils({ id }));
      dispatch(payOrderReset());
    } else if (!window.paypal) {
      injectSdk();
    } else {
      setSdkReady(true);
    }
  }, [paypalSecretKey, OrderDet]);

  const paymentHandler = (paymentResult: any) => {
    console.log("paymentResult", paymentResult);
    dispatch(payOrder({ id, paymentResult }));
  };

  return (
    <>
      <Row>
        <h3>
          {OrderInfo.isPaid ? "Order Confirmation Number : " : "Order Id: "}
          {OrderInfo._id}
        </h3>
        {OrderInfo.orderItems && !OrderInfo.orderItems.length ? (
          <Col md={8}>
            <Link to={`/cart`}>
              <Button variant="light">Go Back To Cart</Button>
            </Link>
          </Col>
        ) : (
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Shipping</h3>
                <p>
                  <strong>Address:</strong>
                  {OrderInfo?.shippingAdress?.address},{" "}
                  {OrderInfo?.shippingAdress?.city},{" "}
                  {OrderInfo?.shippingAdress?.postalCode},{" "}
                  {OrderInfo?.shippingAdress?.country}
                </p>
                {
                  <InfoMessage
                    variant={OrderInfo.isDelivered ? "success" : "danger"}
                    message={
                      OrderInfo.isDelivered ? "Delivered" : "Not Delivered"
                    }
                  />
                }
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Payment</h3>
                <p>
                  <strong>Method:</strong>
                  {OrderInfo.paymentMethod}
                </p>
                {
                  <InfoMessage
                    variant={OrderInfo.isPaid ? "success" : "danger"}
                    message={
                      OrderInfo.isPaid
                        ? `Paid on ${OrderInfo.paidAt}`
                        : "Not Paid"
                    }
                  />
                }
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Order Items</h3>
                {OrderInfo.orderItems?.length == 0 ? (
                  <InfoMessage
                    variant={"danger"}
                    message={"Your cart is empty"}
                  />
                ) : (
                  <ListGroup variant="flush" className={"mt-3"}>
                    {OrderInfo.orderItems &&
                      OrderInfo.orderItems.length &&
                      OrderInfo.orderItems?.map((item: any, index: number) => (
                        <ListGroup.Item>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item._id}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x ${item.price}=${" "}
                              {item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        )}
        <Col md={4}>
          <Card>
            <ListGroup variant={"flush"}>
              <ListGroup.Item>
                <h3>Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${OrderInfo.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${OrderInfo.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${OrderInfo.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${OrderInfo.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!OrderInfo.isPaid ? (
                <ListGroup.Item>
                  <PayPalButton
                    amount={OrderInfo.totalPrice}
                    onSuccess={paymentHandler}
                  />
                </ListGroup.Item>
              ) : (
                ""
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
