/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import CardsContainer from "../cardsContainer/CardsContainer";

export default function Landing() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("All");

  const categoryHandleChane = (newCategory) => {
    setCategory(newCategory);
  };
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setData(res.data.products);
        // setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <div> Loading........</div>;

  return (
    <>
      <Navbar />
      <Categories arr={data} categoryHandleChange={categoryHandleChane} />
      <CardsContainer arr={data} category={category} />
    </>
  );
}
