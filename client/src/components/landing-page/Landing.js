/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import Navbar from '../navbar/Navbar';
import Categories from '../categories/Categories';
import CardsContainer from '../cardsContainer/CardsContainer';

export default function Landing() {
    const[data, setData]=useState(null)

  useEffect(() => {
    axios.get("products").then((res) => {
      setData(res.data);
    });
  }, []);


  if(!data) return <div> loading ...</div>
  return (
    <>
      <Navbar />
      <Categories />
      <CardsContainer />
    </>
  )
}
