import React from 'react'
import './cart-dra.scss'


const CartDraItem = ({item : {imageUrl , name , price , quantity}}) => {
    return(
        <div className="cart-dra-item">
            <img src={imageUrl} alt="item" />
            <div className="cart-details">
                <div className="card-title-detail">{name}</div>
                <span className="card-number-detail">${price} * {quantity}</span>
            </div>
        </div>
    )
}
export default CartDraItem ;