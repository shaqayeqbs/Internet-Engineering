import React from "react";
import FooterPagePro from "../component/Footer/Footer";
import JDetail from "../component/JewelryDetal/JDetail";
import LoadingSpinner from "../component/UI/LoadingSpinner";
const ProductDetail = (props) => {
 
  return (
    <React.Fragment>
      <JDetail Dummy_data={props.jewelerysData} />

      {props.isLoading && <LoadingSpinner />}
      <FooterPagePro />
    </React.Fragment>
  );
};

export default ProductDetail;
