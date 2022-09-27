/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const categories = [
  "All",
  "Shirt",
  "Pants",
  "Dress",
  "Kids",
  "Shose",
  "Accessories",
];

export default function Categories({ categoryHandleChange }) {

  const changeCategory = (e) => {
    categoryHandleChange(e.target.value);
    return e.target.value;

  };

  return (
    <div>
      {categories.map((ele, i) => {
        return (
          <button value={ele} onClick={changeCategory} key={i}>
            {ele}
          </button>
        );
      })}
    </div>
  );
}
