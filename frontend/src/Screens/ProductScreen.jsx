import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../jsonData/products.json";
import {
  card,
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  ListGroupItem,
  Card,
  Form,
} from "react-bootstrap";
import { fetchProduct, addItemsToCart } from "../Redux/actions/productScreen";

import { Ratings } from "../Components/Ratings";

export const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const product = useSelector((state) => state.productInfo?.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct({ id: id }));
  }, []);

  const addToCartItems = async (id) => {
    await dispatch(addItemsToCart({ id, qty }));
    navigate(`/cart?prodId=${id}&qty=${qty}`);
  };

  //const product = products.find((ele) => ele.id === parseInt(id));
  return (
    product && (
      <>
        <Row>
          <Col>
            <Link to="/">
              <Button variant="light">Back</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={"image"} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>Price: {product.price}</ListGroup.Item>
              <ListGroup.Item>
                <Ratings
                  ratings={product.rating}
                  totalReviews={product.numReviews}
                />
              </ListGroup.Item>
              {/* <ListGroup.Item>Rating: {product.Rating}</ListGroup.Item> */}
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
            {/* <ListGroup variant="flush">
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup> */}
          </Col>
          <Col md={3}>
            <Card className="add-to-cart-block">
              <Row>
                <Col md={6}>Price</Col>
                <Col md={6}>{product.price}</Col>
                <Col md={6}>Status:</Col>
                <Col md={6}>
                  {product.CountInStock > 0 ? "In stock" : "out of stock"}
                </Col>
              </Row>
              {product.CountInStock && (
                <Row>
                  <Col md={6}>{product.CountInStock > 0 && "qty:"}</Col>
                  <Col md={6}>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.CountInStock).keys()].map((ele) => (
                        <option key={ele + 1}>{ele + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              )}

              <Row>
                <Col md={12} className="d-grid gap-2">
                  {/* <ListGroup>
                  <ListGroup.Item> */}
                  <Button
                    variant="dark"
                    disabled={product.CountInStock <= 0}
                    // onClick={() => navigate(`/cart/${id}/${qty}`)}
                    onClick={() => addToCartItems(product._id)}
                  >
                    Add to cart
                  </Button>
                  {/* </ListGroup.Item>
                </ListGroup> */}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    )
  );
};
