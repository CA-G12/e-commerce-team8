/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Categories.css";
import { FaAlignCenter } from "react-icons/fa";

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
  // const [category, setCategory] = useState("All");

  const changeCategory = (e) => {
    // setCategory((_) => {
    categoryHandleChange(e.target.value);
    return e.target.value;
    // }
    // )
    // ;
  };

  return (
    <div className="categoryContainer">
      <div className="name">
        <FaAlignCenter fill="rgb(119, 199, 84)" />
        <p>Categories</p>
      </div>
      <div className="buttons">
        {categories.map((ele, i) => {
          return (
            <button value={ele} onClick={changeCategory} key={i}>
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
}
