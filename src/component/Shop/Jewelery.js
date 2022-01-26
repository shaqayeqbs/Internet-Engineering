import classes from "./Jewelery.module.css";
import JeweleryItem from "./JeweleryItem";
const Jewelery = (props) => {
  return (
    <section className={classes.jewelerys}>
      <ul>
        {props.Jewelery.map((item) => (
          <JeweleryItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            color={props.color}
            type={props.type}
          />
        ))}
      </ul>
    </section>
  );
};

export default Jewelery;
