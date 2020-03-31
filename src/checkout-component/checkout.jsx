import React from 'react'
import './checkout.scss'
import { createStructuredSelector } from 'reselect';
import { SelectCartItemsMoney, SelectCartItems } from '../redux/cart/cart.reselect';
import CheckoutComponent from '../checkout-component-/checkout.component';
import { connect } from 'react-redux';
import StripeCheckoutPayment from '../button-stripe/button-stripe';



const CartCheckout = ({cartItemMoney , cartItem}) =>(
    <div className="checkout-items">
        <div className="checkout-header">
            <div className="checkout-name">
                <span>item</span>
            </div>
            <div className="checkout-name">
                <span>quantity</span>
            </div>
            <div className="checkout-name">
                <span>price</span>
            </div>
            <div className="checkout-name">
                <span>remove</span>
            </div>
        </div>
        
            {cartItem.map(cartItem =>(
                <CheckoutComponent key={cartItem.id} cartItem={cartItem} />
            ))}
        
        
            <div className="total-checkout">Total : ${cartItemMoney}</div>
            <StripeCheckoutPayment price={cartItemMoney} />
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItemMoney : SelectCartItemsMoney,
    cartItem : SelectCartItems
})
export default connect(mapStateToProps) (CartCheckout) ;