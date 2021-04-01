import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../components_css/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <h4>Coding~Cypher</h4>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <NavLink className="nav-link" to="/">
                HOME <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                REGISTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                USER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
