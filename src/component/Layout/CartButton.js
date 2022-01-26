import classes from "./CartButton.module.css";
import React from "react";
import MainCart from "./MainCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";


const CartButton = (props) => {

  const authCtx = useContext(AuthContext);
  const isLogin =authCtx.isLoggedIn

  return (
    <section className={classes.container}>
      {isLogin && (
        <NavLink
          to="/profile"
          className={`${classes.button} ${classes.nlinlk}`}
        >
          Profile
        </NavLink>
      )}

      {isLogin && (
        <NavLink
          to="/new-jewelery"
          className={`${classes.button} ${classes.nlinlk}`}
        >
          Add New Jewelery
        </NavLink>
      )}
      <NavLink to="/earing" className={`${classes.button} ${classes.nlinlk}`}>
        Eearing
      </NavLink>
      <NavLink to="/ring" className={`${classes.button} ${classes.nlinlk}`}>
        Ring
      </NavLink>
      <NavLink
        to="/necklace"
        className={`${classes.button} ${classes.nlinlk}`}
      >
        necklaces
      </NavLink>
      <NavLink to="/bracelet" className={`${classes.button} ${classes.nlinlk}`}>
        Bracelet
      </NavLink>

      {isLogin && <MainCart onShow={props.onShowCart} />}
    </section>
  );
};

export default CartButton;
