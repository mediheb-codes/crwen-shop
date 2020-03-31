import ShopData from "../../data-shop/data-shop";

const INITIALIZE_STATE = {
    collections : ShopData
}

const ShopReducer = (state = INITIALIZE_STATE , action) =>{
    switch(action.type){
        default :
        return state ;
    }
}
export default ShopReducer ;
 