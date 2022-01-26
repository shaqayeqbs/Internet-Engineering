import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import JeweleryForm from "../Shop/JeweleryForm";
import HighlightedJewelry from "../Shop/HighlightedJewelry";
import classes from "./JDetail.module.css";
import CartContext from "../../store/cart-context";

const JDetail = (props) => {
  const params = useParams();
  const cartCtx = useContext(CartContext);

  const jewelry = props.Dummy_data.find(
    (jewelry) => jewelry.id === params.jeweleryId
  );

  if (!jewelry) {
    return <p>No Jewelry found!</p>;
  }
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: jewelry.id,
      name: jewelry.name,
      amount: amount,
      price: jewelry.price,
    });
  };

  return (
    <div className={classes.container}>
      <HighlightedJewelry
        title={jewelry.title}
        image={jewelry.image}
        price={jewelry.price}
        color={jewelry.color}
        gender={jewelry.gender}
      />
      <JeweleryForm
        jewelry={jewelry}
        id={jewelry.id}
        onAddToCart={addToCartHandler}
      />
    </div>
  );
};

export default JDetail;
