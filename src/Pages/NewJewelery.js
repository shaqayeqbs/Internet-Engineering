import classes from "./NewJewelery.module.css";
import { useHistory } from "react-router";
import NewJeweleryForm from "../component/Shop/NewJeweleryForm";
const NewJewelery = () => {
  const history = useHistory();

  function addJeweleryHandler(JeweleryData) {
    // fetch("https://jewelery-6fabd-default-rtdb.firebaseio.com/jeweelery.json", {
    //   method: "POST",
    //   body: JSON.stringify(JeweleryData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    //   history.replace("/");
    // });
  }

  return (
    <section>
      <h2>Add New Jewelery</h2>
      <NewJeweleryForm onAddJewelery={addJeweleryHandler} />
    </section>
  );
};

export default NewJewelery;
