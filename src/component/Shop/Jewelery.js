import classes from "./Jewelery.module.css";
import JeweleryItem from "./JeweleryItem";
const Jewelery = (props) => {
  return (
    <section className={classes.jewelerys}>
      <h2>BestSelling</h2>
      <ul>
        {props.jewelery.map((item) => (
          <JeweleryItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Jewelery;
