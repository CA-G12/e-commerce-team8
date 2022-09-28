/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./CardsContainer.css";
import Card from "../card/Card";

export default function CardsContainer({ category, arr , user}) {
  const [items, SetItem] = useState(null);

  useEffect(() => {
    SetItem(arr);
  }, [arr]);


  if (!items) return <p>Loading ...</p>;
  return (
    <div className="container">
      {items.map((element) => {
        const info = {
          id: element.id,
          title: element.title,
          price: element.price,
          imgurl: element.imgurl,
          category: element.category,
        };
        return <Card information={info} key={element.id} user = {user}/>;
      })}
    </div>
  );
}
