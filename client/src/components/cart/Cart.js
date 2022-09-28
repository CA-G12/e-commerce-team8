/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import CartItem from '../cartItem/CartItem';
import Navbar from '../navbar/Navbar';

function Cart() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('/product/cart')
      .then((result) => setData(result.data.data))
      .catch((error) => swal('Error', error.message).then(() => {
        window.location.href = "/";
      }))
  }, [data])

  if (!data) return <div>Loading ...</div>
  return (
    <div className='cart'>
      <Navbar />
      {data.map((e) => <CartItem key={e.product_id} productInfo={e} />)}
    </div>
  )
}

export default Cart;
