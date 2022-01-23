import { useState, useEffect } from "react";
import React from "react";
const LocalStorage = (props) => {

//   const calculateRemaininTime = (experationTIme) => {
//     const currentTime = new Date().getTime();
//     const adjExpirationTime = new Date(experationTIme).getTime;

//     const remaininDurationTime = adjExpirationTime - currentTime;
//     return remaininDurationTime;
//   };

  const [isInLocalStorage, setIsInLocalStorage] = useState(false);
  useEffect(() => {
    const logData = localStorage.getItem(props.key) === props.value;
    setIsInLocalStorage(logData);
  }, []);

  return <React.Fragment>{isInLocalStorage}</React.Fragment>;
};

export default LocalStorage;
