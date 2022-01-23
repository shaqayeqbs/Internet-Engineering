import classes from "./JeweleryForm.module.css";
import Input from "../UI/input";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const JeweleryForm = (props) => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const CartItems = localStorage.getItem("CartItems");
    if (CartItems === null) {
      localStorage.setItem("CartItems", []);
    } else {
      setCartItem(CartItems);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setCartItem(cartItem.push(props.jewelry)); // TODO: add to list here please :D
    console.log(cartItem);
    localStorage.setItem("CartItems", cartItem);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div className={classes.container}>
        <button className={classes.button} type="submit">
          Add To Cart
        </button>
        <NavLink to="/jewelerys/updatejewelry" className={classes.button}>
          Update
        </NavLink>
      </div>
    </form>
  );
};

export default JeweleryForm;
