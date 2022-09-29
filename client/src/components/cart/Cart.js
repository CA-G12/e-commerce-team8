import { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../cartItem/CartItem";
import Navbar from "../navbar/Navbar";

function Cart() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("/product/cart")
      .then((result) => {
        setData(result.data.data);
        setUsername(result.data.username);
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, [data]);

  if (!data) return <div>Loading ...</div>;

  return data.length ? (
    <div className="cart">
      <Navbar user={username} />
      {data.map((e) => (
        <CartItem key={e.product_id} productInfo={e} />
      ))}
    </div>
  ) : (
    <div className="cart">
      <Navbar user={username} />
      <p>You have not bought anything yet</p>
      <p>hello</p>
    </div>
  );
}

export default Cart;
