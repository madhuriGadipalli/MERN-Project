import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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

import {
  addToCart,
  deleteItems,
  addItemsToCart,
} from "../Redux/actions/addToCart";

import { cartItems } from "../Redux/Types/addToCart";

type CartProps = {
  id: string;
  qty: string;
  name: string;
};

export const CartScreen = (props: CartProps) => {
  const dispatch = useDispatch();

  const cartItemsList = useSelector(
    (state: any) => state.cartItems?.products,
    shallowEqual
  );

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prodId = searchParams.get("prodId");
  const qty = searchParams.get("qty");

  useEffect(() => {
    addItems();
  }, []);

  const addItems = () => {
    dispatch(addToCart({ prodId: prodId, quantiy: qty }));
  };

  const deleteCartItems = (prodId: number | string) => {
    dispatch(deleteItems({ prodId: prodId }));
  };

  const callAddToCartApi = async (id: number, qty: string) => {
    dispatch(
      await addItemsToCart({
        id: id,
        qty: qty,
      })
    );
    addItems();
  };

  return (
    <>
      <Row>
        <Row>
          <Col>
            <Link to={`/product/${prodId}`}>
              <Button variant="light">Back</Button>
            </Link>
          </Col>
        </Row>
        <Col md={9}>
          {cartItemsList.length ? (
            cartItemsList.map((item: cartItems, index: number) => (
              <ListGroup variant="flush" key={index}>
                <Row className="products-info">
                  <Col md={2}>
                    <Image src={item.image} alt={"image"} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                    {/* <ListGroupItem> */}
                    {/* <Link to={`/product/${item.id}`}>{item.name}</Link> */}
                    {/* <Link to={`/product/${item.id}`}>{item.description}</Link> */}
                    {/* </ListGroupItem> */}
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.quantity}
                      onChange={(e) =>
                        callAddToCartApi(item._id, e.target.value)
                      }
                    >
                      {[...Array(item.CountInStock).keys()].map((ele) => (
                        <option key={ele + 1}>{ele + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    {`$`}
                    {Number(item.price) * Number(item.quantity)}
                  </Col>
                  <Col md={2}>
                    <span onClick={() => deleteCartItems(item._id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </span>
                  </Col>
                </Row>
              </ListGroup>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Col>
        <Col md={3}>
          <Card className="continue-checkout">
            <Row>
              <Col>
                {`Total Items ${
                  cartItemsList &&
                  cartItemsList.length &&
                  cartItemsList.reduce(
                    (acc: string, item: cartItems) =>
                      Number(acc) + Number(item.quantity),
                    0
                  )
                }`}
              </Col>
              <Row className="price-info">
                {cartItemsList &&
                  cartItemsList.length &&
                  cartItemsList.map((item: cartItems, index: number) => (
                    <>
                      <Col md={8} key={index}>
                        {item.name}
                      </Col>
                      <Col md={4} className="price">
                        ${Number(item.price) * Number(item.quantity)}
                      </Col>
                    </>
                  ))}

                <Col md={6}>{"Total Price"}</Col>
                <Col md={6} className="price">
                  {"$"}
                  {cartItemsList &&
                    cartItemsList.length &&
                    cartItemsList.reduce(
                      (acc: string, item: cartItems) =>
                        Number(acc) +
                        Number(item.quantity) * Number(item.price),
                      0
                    )}
                </Col>
              </Row>
              <Col md={12} className="continue-button">
                <Button variant="dark">{"Continue Checkout"}</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
