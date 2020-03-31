import React from 'react'
import './cart-drapdown.scss'
import CustomButton from '../ButtonInput/ButtonInput'
import {connect} from 'react-redux'
import CartDraItem from '../cart-dra-item/cart-dra';
import {SelectCartItems, SelectCartHidden} from '../redux/cart/cart.reselect'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {setToogleChange} from '../redux/cart/cart-action'
const CardDrapdown = ({cartItem , history , dispatch}) =>(
    <div className='card-drapdown'>
        <div className="card-items" >
            {
                cartItem.map(cartItem => (
                    
                    <CartDraItem key={cartItem.id} item = {cartItem} />
                ))}
            
        </div>
        <CustomButton className="button" onClick={ () => {history.push('/Checkout') ; dispatch(setToogleChange())}}>Go To Checkout</CustomButton> 
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItem : SelectCartItems , 
    hidden : SelectCartHidden
});
export default withRouter(connect(mapStateToProps) (CardDrapdown)) ;