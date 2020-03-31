import React from 'react'
import './collection-category.scss'
import { selectCollection } from '../redux/shopData/shopdata-reselect';
import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item';

const CollectionCategory = ({match , collection}) =>{
    console.log(collection)
    const {title , items} = collection
    return(
    <div className="collection-page">
        <h1 className="title">{title}</h1>
        <div className="items">
            {items.map (item => 
                <CollectionItem key={item.id} item={item} /> )}
        </div>
    </div>
    )
};
const mapStateToProps = (state , ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (CollectionCategory) ;