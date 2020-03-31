import CartActionTypes from './cart-types'
import addItemsToCart , { RemoveItemsToCart } from './cart.utils'

const INITIALIZE_STATE = {
    hidden : true,
    cartItem : []
}
const cartReducer = (state = INITIALIZE_STATE , action) =>{
    switch(action.type){
        case CartActionTypes.TOOGLE_SHOP_CARD  : 
            return{
                ...state,
                hidden : !state.hidden
            };
        case CartActionTypes.SET_CART_ITEM : 
            return{
                ...state,
                cartItem : addItemsToCart(state.cartItem , action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM :
            return{
                ...state , 
                cartItem : state.cartItem.filter ( 
                    cartItem =>
                        cartItem.id !== action.payload.id
                )
            }
        case CartActionTypes.CLEAR_QUANTITY_ITEM :
            return{
                ...state ,
                cartItem : RemoveItemsToCart(state.cartItem , action.payload)
            }
        default : 
         return state ;
            
        
    };
}
export default cartReducer ; 

    