/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./CardsContainer.css";
import Card from "../card/Card";

export default function CardsContainer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  //  console.log(data);

  if (!data) return <div> {loading}</div>;

  return (
    <div className="container">
      {data.map((element) => {
        const info = {
          id: element.id,
          title: element.title,
          price: element.price,
          imgurl: element.imgurl,
          category: element.category,
          description: element.description,
        };
        return <Card information={info} key={info.id} />;
      })}
    </div>
  );
}
