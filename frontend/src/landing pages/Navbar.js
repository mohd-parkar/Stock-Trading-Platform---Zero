import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom bg-body-tertiary p-4 sticky-top">
        <div class="container-fluid">
          <Link to={"/"}>
          <img src="\media\images\logo.svg" style={{width: "17%"}} className="text-center ml-3 mx-5"></img>

          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav position-absolute end-0 me-5 ">
              <li class="nav-item">
                <Link class="nav-link active me-4" aria-current="page" href="#" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link me-4" href="#" to={"/about"}>
                  About
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link me-4" href="#" to={"/products"}>
                  Products
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link me-4" href="#" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link me-4" href="#" to={"/support"}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
