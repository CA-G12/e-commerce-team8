/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";

export default function Landing() {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(11);
  const [user, setUser] = useState(undefined);

  const categoryHandleChane = (category) => {
    const result = products.filter((ele) =>
      category === "All"
        ? true
        : ele.category.toLowerCase() === category.toLowerCase()
    );
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = currentPage - productsPerPage;
    const currentProduct = result.slice(
      (indexOfLastProduct, indexOfFirstProduct)
    );
    setData(currentProduct);
  };

  useEffect(() => {
    axios.get("/products").then((res) => {
      setData(res.data.products);
      setProducts(res.data.products);
      setUser(res.data.user);
    });
  }, []);

  if (!data) return <div> Loading........</div>;

  return (
    <>
      <Navbar user={user}/>
      <Categories arr={data} categoryHandleChange={categoryHandleChane} />
      <CardsContainer arr={data} user={user} />
    </>
  );
}
