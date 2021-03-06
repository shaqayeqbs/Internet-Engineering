import classes from "./NewJeweleryForm.module.css";
import { useRef } from "react";
import Card from "../UI/Card";
const NewJeweleryForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const colorInputRef = useRef();
  const genderInputRef = useRef();
  const typeInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const typeInputRef = genderInputRef.current.value;

    const jewelry = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      color: enteredColor,
      gender: enteredGender,
      type: typeInputRef,
    };
    props.onAddJewelery(jewelry);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
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
        <div className={classes.control}>
          <label htmlFor="Type">Type</label>
          <div className={classes.radio}>
            <label>Ring</label>
            <input type="radio" required id="ring" ref={typeInputRef} />
            <label>Bracelet</label>
            <input type="radio" required id="bracelet" ref={typeInputRef} />
            <label>Nechlace</label>
            <input type="radio" required id="necklace" ref={typeInputRef} />
            <label>Earing</label>
            <input type="radio" required id="earing" ref={typeInputRef} />
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
