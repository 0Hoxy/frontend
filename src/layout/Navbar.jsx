import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">
          리액트 & 스프링부트
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/adduser" className="btn btn-outline-light">
                유저 추가
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
