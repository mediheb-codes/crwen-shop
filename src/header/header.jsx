import React from 'react'
import './header.scss'
import {ReactComponent as Logo} from '../assets/crown.svg'
import {Link} from 'react-router-dom'
import { auth} from '../GoogleAth/SignInWithGoogel'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import CardDrapdown from '../cart-drapdown/cart-drapdown'
import {createStructuredSelector} from 'reselect'
import {SelectCartHidden} from '../redux/cart/cart.reselect'
import {SelectUserItem} from '../redux/user/user.reselect'

const Header = ({currentUser , hidden}) =>{
    return(
        <div className="header">
            <Link className="logo-container"  to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/Shop">
                    Shop
                </Link>
                <Link className="option" to="/Shop">
                    Contact Us
                </Link>
                {currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                : 
                <Link className="option" to="/SignIn">Sign In</Link>}
                <CartItem />
            </div>
            {hidden ? null 
            : <CardDrapdown />
            }
        </div>
    );
                


};

const mapStateToProprs = createStructuredSelector({
    currentUser : SelectUserItem ,
    hidden : SelectCartHidden

    
})
export default connect(mapStateToProprs)(Header) ;