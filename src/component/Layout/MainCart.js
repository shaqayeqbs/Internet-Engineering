import CartIcon from "../Cart/CartIcon";
import classes from "./MainCart.module.css";

const MainCart = (props) => {

  return (
    <button className={classes.button} onClick={props.onShow} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default MainCart;
