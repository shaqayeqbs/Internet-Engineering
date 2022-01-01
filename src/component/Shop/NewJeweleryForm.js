import classes from "./NewJeweleryForm.module.css";
import { useRef } from "react";
import Card from "../UI/Card";
const NewJeweleryForm = (props) => {
  const idInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const colorInputRef = useRef();
  const genderInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const jeweeleryData = {
      id: enteredId,
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      description: enteredDescription,
    };
    props.onAddJewelery(jeweeleryData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Jewelery Id</label>
          <input type="number" required id="id" ref={idInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Jewelery Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Jewelery Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            required
            id="price"
            ref={priceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="color">color</label>
          <div className={classes.radio}>
            <label>Gold</label>
            <input
              type="radio"
              id="gold"
              name="gold"
              value="gold"
              ref={colorInputRef}
            />
            <label>RoseGold</label>
            <input
              type="radio"
              id="rosegold"
              name="rosegold"
              value="rosegold"
              ref={colorInputRef}
            />
            <label>Silver</label>
            <input
              type="radio"
              id="silver"
              name="silver"
              value="silver"
              ref={colorInputRef}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="gender">Gender</label>
          <div className={classes.radio}>
            <label>male</label>
            <input type="radio" required id="male" ref={genderInputRef} />
            <label>female</label>
            <input type="radio" required id="female" ref={genderInputRef} />
            <label>others</label>
            <input type="radio" required id="others" ref={genderInputRef} />
          </div>
        </div>

        <div className={classes.actions}>
          <button>Add Jewelery</button>
        </div>
      </form>
    </Card>
  );
};

export default NewJeweleryForm;
