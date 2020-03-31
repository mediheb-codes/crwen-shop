import { createSelector} from 'reselect'


const SelectCart = state => state.cart ;

export const SelectCartItems = createSelector(
    [SelectCart] , 
    cart => cart.cartItem
);
export const SelectCartHidden = createSelector(
    [SelectCart],
    cart => cart.hidden
)
export const SelectCartItemsIndex = createSelector(
    [SelectCartItems] , 
    cartItem => cartItem.reduce((total , cartItem)=> total + cartItem.quantity , 0 )
);
export const SelectCartItemsMoney = createSelector(
    [SelectCartItems],
    cartItem => cartItem.reduce((total , cartItem)=> total + cartItem.quantity * cartItem.price , 0 )
)