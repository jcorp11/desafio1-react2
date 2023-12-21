import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="nav1">
        <NavLink
          className={({ isActive }) => (isActive ? "active text-success" : "")}
          to={"/"}
        >
          <span>🏠 Home</span>
        </NavLink>
        <NavLink
          to={"/contacto"}
          className={({ isActive }) => (isActive ? "active text-success" : "")}
        >
          <span>📒 Contacto</span>
        </NavLink>
      </section>
      <section className="nav2">
        <NavLink to={"/"}>
          <span>Happy Cake 🍰</span>
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
