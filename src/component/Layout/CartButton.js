import classes from "./CartButton.module.css";
import { useState } from "react";
import React from "react";
import MainCart from "./MainCart";
import { NavLink } from "react-router-dom";
import icon from "../images/icons8-person-80.png";
const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  return (
    <section className={classes.container}>
      <NavLink to="/profile" className={`${btnClasses} ${classes.nlinlk}`}>
        Profile
      </NavLink>

      <NavLink to="/new-jewelery" className={`${btnClasses} ${classes.nlinlk}`}>
        Add New Jewelery
      </NavLink>
      <NavLink to="/earings" className={`${btnClasses} ${classes.nlinlk}`}>
        Eearing
      </NavLink>
      <NavLink to="/Rings" className={`${btnClasses} ${classes.nlinlk}`}>
        Ring
      </NavLink>
      <NavLink to="/necklaces" className={`${btnClasses} ${classes.nlinlk}`}>
        necklaces
      </NavLink>
      <NavLink to="/bracelet" className={`${btnClasses} ${classes.nlinlk}`}>
        Bracelet
      </NavLink>

      <MainCart onShow={props.onShowCart} />
      <NavLink to="/Login" className={`${btnClasses} ${classes.pic}`}>
        <img className={classes.pic} src={icon} />
      </NavLink>
      <NavLink to="/" className={`${btnClasses} ${classes.nlinlk}`}>
        Home
      </NavLink>
    </section>
  );
};

export default CartButton;
