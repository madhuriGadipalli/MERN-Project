import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";

import { Header } from "./Components/Header";
import { NavigatePage } from "./Components/navigatingPage";
import { Footer } from "./Components/Footer";
import { HomeScreen } from "./Screens/HomeScreen";
import { ProductScreen } from "./Screens/ProductScreen";
import { CartScreen } from "./Screens/CartScreen";
import { SignInScreen } from "./Screens/SignInScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { ShippingScreen } from "./Screens/ShippingScreen";
import { PaymentScreen } from "./Screens/PaymentScreen";
import { OrderScreen } from "./Screens/OrderScreen";
import { PlaceOrderScreen } from "./Screens/PlaceOrderScreen";
import { loginSession } from "./Redux/actions/signIn";
import { MyOrders } from "./Screens/MyOrdersScreen";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginSession());
  }, []);

  return (
    <Router>
      <Header />
      <NavigatePage />
      <main>
        <Container>
          <Routes>
            <Route path="/myOrders" element={<MyOrders />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/ordersummary" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/register" element={<RegistrationScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />

            {/* <Route path="/cart" element={<CartScreen name={"test"} />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
