import React from "react";
import classes from "./MainNavigation.module.css";
import CartButton from "./CartButton";
import "../../scss/Main.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MainCart from "./MainCart";
import icon from "../images/icons8-person-80.png";

const MainNavigation = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log(cartIsShown);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-icon-top appbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/jewelerys">
            Gemstone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/jewelerys"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/profile"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/new-jewelery" tabIndex="-1">
                  Add New Jewelery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/earings" tabIndex="-1">
                  Eearing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/ring">
                  Ring
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/necklaces">
                  necklaces
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/bracelet">
                  bracelet
                </a>
              </li>
              {cartIsShown && <Cart onClose={hideCartHandler} />}
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={showCartHandler}>
                  <span className="fa fa-shopping-basket">
                    <span className="position-absolute top-10 start-99 translate-middle badge rounded-pill bg-danger">
                      3
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <a className="navbar-brand" href="/Login">
              <img src={icon} alt="" width="50" height="42" />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default MainNavigation;
