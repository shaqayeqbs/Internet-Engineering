import React from "react";
import classes from "./MainNavigation.module.css";
import CartButton from "./CartButton";
import "../../scss/Main.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
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
        <h1>jewelery</h1>
        <div className={classes.buttons}>
          <CartButton onShowCart={showCartHandler} />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
