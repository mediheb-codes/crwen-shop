import React from 'react'
import './collection-item.scss'
import CustomButton from '../ButtonInput/ButtonInput'
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart-action';


const CollectionItem = ({item , addItem}) => {
    const {imageUrl , name , price} = item;
    return(
        <div className="collection-item">
            <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <div className="button-cart">
                <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
            </div>
        </div>
    )

};
const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})
export default connect(null , mapDispatchToProps) (CollectionItem ); 