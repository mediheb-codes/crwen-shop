import  CartActionTypes  from './cart-types'

 export const setToogleChange = () =>({
    type : CartActionTypes.TOOGLE_SHOP_CARD 
})
export const addItem = item=>({
    type : CartActionTypes.SET_CART_ITEM ,
    payload : item
})
export const RemoveItem = item =>({
    type : CartActionTypes.REMOVE_CART_ITEM ,
    payload : item 
})
export const ClearItem = item =>({
    type : CartActionTypes.CLEAR_QUANTITY_ITEM , 
    payload : item 
})

