import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Product } from "../Components/Product";
//import products from "../jsonData/products.json";
import "../styles/homescreen.css";
import { fetchProducts } from "../Redux/actions/homeScreen";

export const HomeScreen = () => {
  const products = useSelector((state) => state.products?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {console.log("productsss", products)}
      <Row>
        <h3>Latest Products</h3>
        {products?.map((product, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className={"display-flex"}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
