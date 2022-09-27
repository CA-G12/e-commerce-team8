/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./CardsContainer.css";
import Card from "../card/Card";

export default function CardsContainer({ category, arr }) {
  const [items, SetItem] = useState(null);

  useEffect(() => {
    const result = arr.filter((ele) =>
      category === "All"
        ? true
        : ele.category.toLowerCase() === category.toLowerCase()
    );
    SetItem(result);
  }, [category]);

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
          description: element.description,
        };
        return <Card information={info} key={element.id} />;
      })}
    </div>
  );
}
