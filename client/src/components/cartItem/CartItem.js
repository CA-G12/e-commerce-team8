/* eslint-disable react/prop-types */
import './CartItem.css';

function CartItem({ productInfo }) {

    return (
        <div className='cartItem'>
            <p>{productInfo.title}</p>
            <p>{productInfo.price}</p>
            <img src={productInfo.imgurl} alt={productInfo.title} />
            <p>{productInfo.category}</p>
        </div>
    )
};

export default CartItem;