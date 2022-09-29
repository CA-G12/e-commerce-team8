/* eslint-disable react/prop-types */
import axios from 'axios';
import swal from 'sweetalert';
import './CartItem.css';

function CartItem({ productInfo }) {


    function cancelProduct(productId) {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    return axios
                        .delete(`/api/v1/product/delete/${productId}`)
                }
                return null
            })
            .then(res => res ? res.data.message : '')
            .then(msg => {
                if (!msg) return
                swal('Deleted', msg, 'deleted')
            })
            .catch(err => swal(err.response.data.message, '', 'warning'))
    }

    return (
      <div className="cartItem">
        <div className="imgBox">
          <img src={productInfo.imgurl} alt={productInfo.title} />
        </div>
        <div className="content">
          <div className="category">
            <p>{productInfo.category}</p>
          </div>
          <div className="productName">
            <h3>{productInfo.title}</h3>
          </div>
          <div className="price">
            <p>{productInfo.price}$</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            cancelProduct(productInfo.product_id);
          }}
        >
          Delete
        </button>
      </div>
    );
};

export default CartItem;