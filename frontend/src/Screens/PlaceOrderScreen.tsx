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
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationItems } from "../Components/NavigationItems";
import { InfoMessage } from "../Components/InfoBar";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../Redux/actions/placeOrder";

interface Product {
  name: string;
  qty: string | undefined;
  image: string;
  price: string;
  quantity?: string;
}

export const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const shippingInfo = useSelector((state: any) => state.shippingInfo?.res);
  const paymentType = useSelector(
    (state: any) => state.PaymentInfo?.paymentType
  );
  const cartItemsList = useSelector(
    (state: any) => state.cartItems?.products,
    shallowEqual
  );

  //Calculating Order Prices
  const addDecimals = (num: any) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  const itemsPrice =
    cartItemsList &&
    cartItemsList.length > 0 &&
    cartItemsList?.reduce(
      (acc: any, item: any) => acc + item.quantity * item.price,
      0
    );
  const shippingPrice = addDecimals(itemsPrice > 0 ? 0 : 20);
  const taxPrice = addDecimals(Number((0.1 * itemsPrice).toFixed(2)));
  const totalPrice = addDecimals(
    itemsPrice + Number(shippingPrice) + Number(taxPrice)
  );
  const orderItemDetails = () => {
    const res: any[] = [];
    cartItemsList.map((item: Product, i: number) => {
      const obj: Product = {
        name: "",
        qty: "",
        image: "",
        price: "",
      };
      obj["name"] = item.name;
      obj["qty"] = item.quantity;
      obj["image"] = item.image;
      obj["price"] = item.price;
      res.push(obj);
    });
    return res;
  };

  const placeOrderHandler = () => {
    const reqObject = {
      shippingAdress: {
        address: shippingInfo.address,
        city: shippingInfo.city,
        postalCode: shippingInfo.postalCode,
        country: shippingInfo.country,
      },
      paymentMethod: paymentType,
      taxPrice: taxPrice,
      shippingPrice: shippingPrice,
      totalPrice: totalPrice,
      orderItems: orderItemDetails(),
      isPaid: false,
      //paidAt: new Date(),
      isDelivered: false,
      //DeliveredAt: new Date(),
      itemsPrice: addDecimals(itemsPrice),
    };
    dispatch(placeOrder(reqObject));
  };

  return (
    <>
      <NavigationItems step1 step2 step3 step4 />
      <Row>
        {cartItemsList && !cartItemsList.length ? (
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
                  {shippingInfo.address}, {shippingInfo.city},{" "}
                  {shippingInfo.postalCode}, {shippingInfo.country}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Payment</h3>
                <p>
                  <strong>Method:</strong>
                  {paymentType}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Order Items</h3>
                {cartItemsList?.length == 0 ? (
                  <InfoMessage
                    variant={"danger"}
                    message={"Your cart is empty"}
                  />
                ) : (
                  <ListGroup variant="flush" className={"mt-3"}>
                    {cartItemsList &&
                      cartItemsList.length &&
                      cartItemsList?.map((item: any, index: number) => (
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
                              {item.quantity} x ${item.price}=${" "}
                              {item.quantity * item.price}
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
                  <Col>${addDecimals(itemsPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block place-order-btn"
                  disabled={cartItemsList.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
