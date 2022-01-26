import React from "react";
import classes from "./MainNavigation.module.css";
import CartButton from "./CartButton";
import "../../scss/Main.css";
import Cart from "../Cart/Cart";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/icons8-person-80.png";
import iconLog from "../images/logout.png";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const LogoutHandler = () => {
    authCtx.logout();
  };
  const btnClasses = `${classes.no} ${
    isLogin ? classes.width : classes.width2
  }`;

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.ico}>
          <NavLink to="/" className={`${classes.button} ${classes.nlinlk}`}>
            <h1>GemeStone</h1>
          </NavLink>
          {!isLogin && (
            <NavLink to="/auth" className={classes.button}>
              <img
                className={classes.pic}
                src={icon}
                alt="maybe it's for icon"
              />
            </NavLink>
          )}
          {isLogin && (
            <button
              onClick={LogoutHandler}
              className={`${classes.noStyleButton} ${classes.logoutIcon}`}
            >
              <img className={classes.pic} src={iconLog} alt="logout Icon" />
            </button>
          )}
        </div>

        <div className={btnClasses}>
          <CartButton onShowCart={showCartHandler} />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
