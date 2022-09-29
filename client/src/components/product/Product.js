/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Navbar from '../navbar/Navbar'
import './Product.css'

export default function Product(props) {
   const location = useLocation()
   const navigate = useNavigate();
   const { name } = location.state || ''

   const [data, setData] = useState(null)

  useEffect(() => {
    const endpoint = window.location.pathname;
    axios.get(endpoint)
     .then((res) => {
      setData(res.data.data[0])
     })
     .catch((err) => {
       swal(err.response.data.message, '', "warning");
     })
  }, [])

  const handleAddToCart = () => {
    axios.get(`/product/buy/${data.id}`)
    .then((res) =>{
      swal(res.data.message, '', "success");
    })
    .catch((err) => {
      navigate('/signin')
    })
  }

  if(!data) return <p>Loading ...</p>
  return (
    <>
    <Navbar user={name}/>
    <div className='product'>

      <div className='image'>
        <img src={data.imgurl} alt='img'/>
      </div>

      <div className='product-details'>
        <h2> {data.title}</h2>
        <h4>{data.category}</h4>
        <h2  className='price'>${data.price}</h2>
        <p>{data.description}</p>
        <button type='button' onClick={ handleAddToCart }>Add To Cart</button>
      </div>

    </div>
    </>
  )
}
