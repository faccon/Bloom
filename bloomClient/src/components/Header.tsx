import React from "react";
import { NAVBAR } from "../constants";

export function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light">
      <div className="container-fluid">
        <i className="fa-brands fa-bootstrap"></i>
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="material-icons-outlined d-none d-md-block">
            search
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-right d-block d-md-none">
          <span className="material-icons-outlined">shopping_bag</span>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              {NAVBAR.WOMAN}
            </a>
            <a className="nav-link" href="/">
              {NAVBAR.MAN}
            </a>
            <a className="nav-link" href="/">
              {NAVBAR.KIDS}
            </a>
          </div>
          <div className="nav-right d-none d-md-block">
            <span className="material-icons-outlined">shopping_bag</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
