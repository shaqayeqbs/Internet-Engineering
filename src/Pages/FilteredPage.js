import React from "react";
import Jewelery from "../component/Shop/Jewelery";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../component/UI/LoadingSpinner";
import FooterPagePro from "../component/Footer/Footer";
const FilteredPage = (props) => {
  const params = useParams();
  console.log(props.jewelerysData);
  const jewelry = [];
  const data = props.jewelerysData;
  for (const key in data) {
    if (data[key].type == params.type) {
      console.log(key, "in kie");
      const jewelreeey = {
        id: key,
        ...data[key],
      };

      jewelry.push(jewelreeey);
    }
  }
  console.log(jewelry, "chitoshe");
  if (jewelry.length === 0) {
    return (
      <React.Fragment>
        <h1>No Jewelry found!</h1>
        
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Jewelery Jewelery={jewelry} />
      {props.isLoading && <LoadingSpinner />}
      <FooterPagePro />
    </React.Fragment>
  );
};

export default FilteredPage;
