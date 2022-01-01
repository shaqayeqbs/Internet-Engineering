import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: 6,
          title: "Solid Gold Petite Micropave ",
          amount: 2,
          price: 168,
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
      ].map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>630.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
