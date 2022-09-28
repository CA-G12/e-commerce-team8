/* eslint-disable react/prop-types */
import axios from 'axios';
import swal from 'sweetalert';
import './CartItem.css';

function CartItem({ productInfo }) {


    function cancelProduct(productId) {
        console.log(productId);
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    return axios
                        .delete(`/product/delete/${productId}`)
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