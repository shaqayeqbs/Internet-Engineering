import Jewelery from "../component/Shop/Jewelery";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import { Slider } from "../Slider";
import LoadingSpinner from "../component/UI/LoadingSpinner";
import FooterPage from "../component/Footer/Footer";
const Dummy_data = [
  {
    key: 1,
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: "695$",
    color: "silver",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 2,
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    color: "silver",

    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 3,
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    color: "silver",

    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    key: 4,
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    color: "silver",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
];

const AllJewelery = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [jewelerys, setJewelerys] = useState([]);
  // const getALLjewelerys = useCallback(async () => {
  //   const res = await fetch(
  //     "https://jewelery-6fabd-default-rtdb.firebaseio.com/jewelry.json"
  //   );

  //   const data = await res.json();
  //   const testjewelerys = [];

  //   for (const key in data) {
  //     testjewelerys.push({
  //       id: key,
  //       key: key,
  //       price: data[key].price,
  //       title: data[key].title,
  //       image: data[key].image,
  //       color: data[key].color,
  //       gender: data[key].gender,
  //     });
  //   }
  //   setJewelerys(testjewelerys);
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   getALLjewelerys();
  // }, []);

  return (
    <React.Fragment>
      <Slider />

      <Jewelery jewelery={Dummy_data} />
      {/* {isLoading && <LoadingSpinner />} */}

      <FooterPage />
    </React.Fragment>
  );
};

export default AllJewelery;
