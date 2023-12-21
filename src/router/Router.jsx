import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacto from "../views/Contacto";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
