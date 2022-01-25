import classes from "./JeweleryForm.module.css";
import classes1 from "./input.module.css";
import { useRef, useState } from "react";

const JeweleryForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes1.input} htmlFor="Amount">
        Amount
      </label>
      <input
        ref={amountInputRef}
        id={`"amount_" + ${props.id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <div className={classes.container}>
        <button className={classes.button} type="submit">
          Add To Cart
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
};

export default JeweleryForm;
