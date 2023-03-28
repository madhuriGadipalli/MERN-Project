import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { HomeScreen } from "./Screens/HomeScreen";
import { ProductScreen } from "./Screens/ProductScreen";
import { CartScreen } from "./Screens/CartScreen";

export const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            {/* <Route path="/cart" element={<CartScreen name={"test"} />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
