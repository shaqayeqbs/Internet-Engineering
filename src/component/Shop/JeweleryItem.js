import classes from "./JweleryItem.module.css";
import Card from "../UI/Card";
import JeweleryForm from "./JeweleryForm";


const JeweleryItem = (props) => {
  const { title, price, description, id, image } = props;
  const addToCartHandler = () => {};

  return (
    <li>
      <Card>
        <div className={classes.container}>
          <header className={classes.header}>
            <div className={classes.container}>
              <h3>{title}</h3>
              <div className={classes.price}>
                ${parseFloat(parseFloat(price).toFixed(2))}
                <p className={classes.description}>{description}</p>
              </div>
            </div>
            <div className={classes.image}>
              <img src={image} alt={title} />
            </div>
          </header>

          <div>
            <JeweleryForm />
           
          </div>
        </div>
      </Card>
    </li>
  );
};

export default JeweleryItem;
