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
      .catch((error) => console.log(error))
  }, [data])

  if (!data) return <div>Loading ...</div>
  return (
    <div className='cart'>
      {data.map((e) => <CartItem key={e.id} productInfo={e} />)}
      {/*  <Navbar />
      <CartItem cardInfo={data} /> */}
    </div>
  )
}

export default Cart;
