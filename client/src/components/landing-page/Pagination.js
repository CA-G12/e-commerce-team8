/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export default function Pagination({
  productsPerPage,
  totalProducts,
  current,
  currentPage
}) {
  const pageNumber = [];
  const [pageNum, setPageNum] = useState(1)

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    setPageNum(currentPage)
  }, [currentPage]);

  const numberHndleChange = (e) => {
    current(Number(e.target.id));
    setPageNum(Number(e.target.id))
  };

  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        listStyle: "none",
      }}
    >
      {pageNumber.map((number) => {
        return (
          <li key={number}>
            <button
              type="button"
              id={number}
              style={{
                textDecoration: "none",
                color: pageNum === number ? "#000" : "#77C754",
                border: 0,
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: "1.1rem"
              }}
              onClick={numberHndleChange}
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
