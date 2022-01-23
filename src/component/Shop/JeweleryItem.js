import classes from "./JweleryItem.module.css";
import Card from "../UI/Card";
import JeweleryForm from "./JeweleryForm";
import { NavLink } from "react-router-dom";

const JeweleryItem = (props) => {
  const { title, price, description, id, image } = props;
  const addToCartHandler = () => {};

  return (
    <li>
      <Card>
        <NavLink to={`/jewelerys/${props.id}`} className={classes.underline}>
          <div className={classes.container}>
            <header className={classes.header}>
              <div className={classes.container}>
                <h3>{title}</h3>
                <div className={classes.price}>
                  ${parseFloat(parseFloat(price).toFixed(2))}
                </div>
              </div>
              <div className={classes.image}>
                <img src={image} alt={title} />
              </div>
            </header>
          </div>
        </NavLink>
      </Card>
    </li>
  );
};

export default JeweleryItem;
