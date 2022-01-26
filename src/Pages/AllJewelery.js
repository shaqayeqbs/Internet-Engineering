import Jewelery from "../component/Shop/Jewelery";
import React from "react";
import { Slider } from "../Slider";
import LoadingSpinner from "../component/UI/LoadingSpinner";
import FooterPage from "../component/Footer/Footer";

const AllJewelery = (props) => {
  return (
    <React.Fragment>
      <Slider />
      <Jewelery Jewelery={props.jewelerysData} />
      {props.isLoading && <LoadingSpinner />}
      <FooterPage />
    </React.Fragment>
  );
};

export default AllJewelery;
