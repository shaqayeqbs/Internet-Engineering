import classes from "./Highlighted.module.css";

const HighlightedJewelry = (props) => {
  return (
    <figure className={classes.container}>
      <div>
        <h3 className={classes.header}>{props.title}</h3>
        <div className={classes.price}>{props.price}$</div>
        <div className={classes.color}>
          <span className={classes.title}>color:  </span>
          {props.color}
        </div>
        <div className={classes.color}>
          <span className={classes.title}>Gender: </span>
          {props.gender}
        </div>
      </div>
      <div className={classes.image}>
        <img className={classes.image} src={props.image} alt="joziat" />
      </div>
    </figure>
  );
};

export default HighlightedJewelry;
