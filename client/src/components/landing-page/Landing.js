/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import CardsContainer from "../cardsContainer/CardsContainer";
// import Card from "../card/Card";
import Pagination from "./Pagination";

export default function Landing() {
  const [data, setData] = useState(null);
  const [newcategory, setCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const categoryHandleChane = (category) => {
    setCategory(category);
    if (category !== "All") setCurrentPage(1);

    const result = products.filter((ele) =>
      category === "All"
        ? true
        : ele.category.toLowerCase() === category.toLowerCase()
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - 10;
    const currentProduct = result.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    setData(currentProduct);
  };

  const current = (currentNum) => {
    setCurrentPage(currentNum);
  };

  useEffect(() => {
    axios.get("/products").then((res) => {
      setData(res.data.products.slice(0, 10));
      setProducts(res.data.products);
      setUser(res.data.user);
    });
  }, []);

  useEffect(() => {
    categoryHandleChane(newcategory);
  }, [currentPage]);

  if (!data) return <div> Loading........</div>;
  return (
    <>
      <Navbar user={user} />
      <Categories arr={data} categoryHandleChange={categoryHandleChane} />
      <CardsContainer arr={data} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={50}
        current={current}
      />
    </>
  );
}
