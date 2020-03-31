import React from 'react'
import './checkout.component.scss'
import { RemoveItem, addItem, ClearItem } from '../redux/cart/cart-action';
import { connect } from 'react-redux';


const CheckoutComponent = ({cartItem , RemoveItem , ClearItem , AddItem}) =>{
    const {imageUrl , name , price , quantity} = cartItem ;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
                <img src={imageUrl} alt='item' />
        </div>
            <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick = {() => ClearItem(cartItem)}>&#10094;</div>
        <span className="quantity-name">{quantity}</span>
        <div className="arrow" onClick = {() => AddItem(cartItem)}>&#10095;</div>
        </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick = {() => RemoveItem(cartItem)}>
        &#10005;
      </div>
    </div>
    )
    
};
const mapDispatchToProps = dispatch => ({
  RemoveItem : item => dispatch(RemoveItem(item)) ,
  ClearItem : item => dispatch(ClearItem(item)) , 
  AddItem : item => dispatch(addItem(item))
})
export default connect(null , mapDispatchToProps) (CheckoutComponent) ;