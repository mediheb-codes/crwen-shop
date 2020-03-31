import React from 'react'
import './cart-item.scss'
import {ReactComponent  as CardLogo} from "../assets/11.2 shopping-bag.svg.svg"
import {connect} from 'react-redux'
import {setToogleChange}  from '../redux/cart/cart-action'
import { SelectCartItemsIndex} from '../redux/cart/cart.reselect'

const CartItem = ({setToogleChange , cartIndex}) =>(
    <div className="card-item">
        <CardLogo className="card-logo" onClick={setToogleChange}/>
        <span className="card-number">{cartIndex}</span>
    </div>
);
const mapDispatchToProps = dispatch =>({
    setToogleChange : () => dispatch(setToogleChange())
})
const mapStateToProps =  state =>({
    cartIndex : SelectCartItemsIndex(state)
})

export default connect(mapStateToProps , mapDispatchToProps)(CartItem) ;