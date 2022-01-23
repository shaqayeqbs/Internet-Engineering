import React from "react";
import classes from "./MainNavigation.module.css";
import CartButton from "./CartButton";
import "../../scss/Main.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/icons8-person-80.png";
const MainNavigation = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.ico}>
          <NavLink to="/" className={`${classes.button} ${classes.nlinlk}`}>
            <h1>GemeStone</h1>
          </NavLink>
          <NavLink to="/Login" className={`${classes.button} ${classes.pic}`}>
            <img className={classes.pic} src={icon} alt="maybe it's for icon" />
          </NavLink>
        </div>

        <div className={classes.buttons}>
          <CartButton onShowCart={showCartHandler} />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
