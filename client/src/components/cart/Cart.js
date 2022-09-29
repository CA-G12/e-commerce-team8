import { useEffect, useState } from 'react';
import axios from 'axios'
import CartItem from '../cartItem/CartItem';
import Navbar from '../navbar/Navbar';
import "./Cart.css";

function Cart() {
  const [data, setData] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios
      .get('/product/cart')
      .then((result) => {
        setData(result.data.data);
        setUsername(result.data.username);
      })
      .catch(() => { window.location.href = "/"; })
  }, [data])

  if (!data) return <div>Loading ...</div>

  return data.length ? (
    <>
      <Navbar user={username} />
      <div className="cart">
        {data.map((e) => (
          <CartItem key={e.product_id} productInfo={e} />
        ))}
      </div>
    </>
  ) : (
    <>
      <Navbar user={username} />
      <div className="cart">
        <p style={{ padding: "30px" }}>You have not bought anything yet</p>
      </div>
    </>
  );
}

export default Cart;
