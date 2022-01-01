import Jewelery from "../component/Shop/Jewelery";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import { Slider } from "../Slider";
import LoadingSpinner from "../component/UI/LoadingSpinner";

const AllJewelery = () => {
  const Dummy_data = [
    {
      key: 1,
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      key: 2,
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",

      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      key: 3,
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",

      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      key: 4,
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",

      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
  ];
  const [jewelerys, setJewelerys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getALLjewelerys = useCallback(async () => {
  //   const res = await fetch(
  //     "https://jewelery-6fabd-default-rtdb.firebaseio.com/jeweelery.json"
  //   );

  //   const data = await res.json();
  //   const jewelerys = [];

  //   for (const key in data) {
  //     const jeweelery = {
  //       ...data[key],
  //     };

  //     jewelerys.push(jeweelery);
  //   }
  //   setJewelerys(jewelerys);
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
    </React.Fragment>
  );
};

export default AllJewelery;
