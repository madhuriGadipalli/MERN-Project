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
  Table,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InfoMessage } from "../Components/InfoBar";
import Moment from "react-moment";

import { retriveOrderDetails } from "../Redux/actions/profile";

type props = {
  variant: string;
  message: string;
};

export const MyOrders = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const orders = useSelector((state: any) => state.profileInfo?.orders);

  useEffect(() => {
    dispatch(retriveOrderDetails());
  }, []);
  return (
    <>
      {orders && !orders.length ? (
        <div className="shop-more-products">
          <InfoMessage variant={"info"} message={"There are no Orders"} />
          <Button onClick={() => navigate("/")} variant="info">
            Shop More Products
          </Button>
        </div>
      ) : (
        <>
          <h3>My Orders</h3>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr className="text-center text-dark">
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders?.map((item: any, i: number) => (
                  <tr className="text-center">
                    <td key={i}>{item._id}</td>
                    <td key={i}>
                      <Moment format="MM/DD/YYYY" date={item.paidAt} />
                    </td>
                    <td key={i}>{item.totalPrice}</td>
                    <td key={i}>
                      {" "}
                      <i
                        className={
                          item.isPaid
                            ? "fas fa-check text-success"
                            : "fas fa-times text-danger"
                        }
                      />
                    </td>
                    <td key={i}>
                      {" "}
                      <i
                        className={
                          item.isDelivered
                            ? "fas fa-check text-success"
                            : "fas fa-times text-danger"
                        }
                      />
                    </td>
                    <td key={i} className="detailsLink">
                      <Link to={`/order/${item._id}`}>Details</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
