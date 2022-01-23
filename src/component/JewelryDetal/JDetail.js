import React from "react";
import { useParams } from "react-router";
import JeweleryForm from "../Shop/JeweleryForm";
import HighlightedJewelry from "../Shop/HighlightedJewelry";
import classes from "./JDetail.module.css";
import Card from "../UI/Card";

const JDetail = (props) => {
  const params = useParams();

  const jewelry = props.Dummy_data.find(
    (jewelry) => jewelry.id === parseInt(params.jeweleryId)
  );

  if (!jewelry) {
    return <p>No Jewelry found!</p>;
  }
  return (
    <div className={classes.container}>
      <HighlightedJewelry
        title={jewelry.title}
        image={jewelry.image}
        price={jewelry.price}
        color={jewelry.color}
        gender={jewelry.gender}
      />
      <JeweleryForm jewelry={jewelry} />
    </div>
  );
};

export default JDetail;
