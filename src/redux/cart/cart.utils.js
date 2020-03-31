 const addItemsToCart = (cartItems , cartItemToAdd) =>{
    const exsistingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(exsistingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem , quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    return [...cartItems , {...cartItemToAdd , quantity : 1}]
}
export default addItemsToCart ;

export const RemoveItemsToCart = (cartItems , cartItemToRemove) =>{
    const exsistingItemClear = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if(exsistingItemClear.quantity === 1 ) {
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem , quantity: cartItem.quantity - 1}
        : cartItem
        )
          
};

