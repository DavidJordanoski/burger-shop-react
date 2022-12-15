import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
   
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;