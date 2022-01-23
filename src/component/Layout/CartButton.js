import classes from "./CartButton.module.css";
import React from "react";
import MainCart from "./MainCart";
import { NavLink } from "react-router-dom";


import { useState, useEffect } from "react";

const CartButton = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const logData = localStorage.getItem("isLogin") === "1";
    setIsLogin(logData);
  }, []);

  console.log(isLogin);
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
      <NavLink to="/earings" className={`${classes.button} ${classes.nlinlk}`}>
        Eearing
      </NavLink>
      <NavLink to="/Rings" className={`${classes.button} ${classes.nlinlk}`}>
        Ring
      </NavLink>
      <NavLink
        to="/necklaces"
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
