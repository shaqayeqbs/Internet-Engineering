import React from "react";
import FooterPagePro from "../component/Footer/Footer";
import JDetail from "../component/JewelryDetal/JDetail";

const Dummy_data = [
  {
    key: 1,
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    color: "silver",
    gender: "female",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 2,
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    color: "silver",
    gender: "female",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 3,
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    color: "silver",
    gender: "female",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 4,
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    color: "silver",
    gender: "female",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
];

const ProductDetail = () => {
  return (
    <React.Fragment>
      <JDetail Dummy_data={Dummy_data} />
      <FooterPagePro />
    </React.Fragment>
  );
};

export default ProductDetail;
