/* eslint-disable react/prop-types */
import axios from 'axios';
import swal from 'sweetalert';
import './CartItem.css';

function CartItem({ productInfo }) {


    function cancelProduct(productId) {
        console.log(productId);
        axios
            .delete(`/product/delete/${productId}`)
            .then(res => res.data.message)
            .then(msg => swal('Deleted', msg))
            .catch(err => console.log(err))
    }

    return (
        <div className='cartItem'>
            <p>{productInfo.title}</p>
            <p>{productInfo.price}</p>
            <img src={productInfo.imgurl} alt={productInfo.title} />
            <p>{productInfo.category}</p>
            <button type='button' onClick={() => {
                cancelProduct(productInfo.product_id)
            }}>Delete</button>
        </div>
    )
};

export default CartItem;