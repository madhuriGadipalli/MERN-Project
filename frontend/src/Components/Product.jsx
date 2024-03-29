import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Ratings } from "./Ratings";

export const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant={"top"}></Card.Img>
      </Link>

      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        {/* <Card.Text> {product.description}</Card.Text> */}
        <Ratings ratings={product.rating} totalReviews={product.numReviews} />
        {/* <Card.Text as="div">{product.rating}</Card.Text> */}
        <Card.Text as="h3">
          {"$"}
          {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
