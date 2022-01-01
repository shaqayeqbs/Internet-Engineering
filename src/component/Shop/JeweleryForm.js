import classes from "./JeweleryForm.module.css";
import Input from "../UI/input";
import { NavLink } from "react-router-dom";
const JeweleryForm = (props) => {
  return (
    <form className={classes.form}>
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
        <button className={classes.button}>Add To Cart</button>
        <NavLink to="/jewelerys/updatejewelry" className={classes.button}>
          Update
        </NavLink>
      </div>
    </form>
  );
};

export default JeweleryForm;
