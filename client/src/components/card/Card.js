/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";


export default function Card(props) {
  return (
    <Link
      to={`/product/${props.information.id}`}
      style={{ textDecoration: "none" }} 
      state={{name: props.user}}
    >
      <div key={props.information.id} className="card">
        <div className="imgBox">
          <img src={props.information.imgurl} alt="" />
          {/*  */}
          {/* props.information.imgurl */}
        </div>
        <div className="content">
          <div className="category">
            <p>{props.information.category}</p>
          </div>
          {/* {props.information.title} */}
          <div className="productName">
            <h3>product name</h3>
          </div>
          <div className="price">
            <p>{props.information.price.toFixed(2)}$</p>
            {/* <FaStar /> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
