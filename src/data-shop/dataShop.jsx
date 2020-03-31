import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import  {selectCollectionPerView } from '../redux/shopData/shopdata-reselect';



const ShopData = ({collections}) => (
    <div className="shop-page">
        {collections.map(({id , ...otherCollectionsProps}) =>
            <CollectionPreview key = {id} {...otherCollectionsProps}/>
        )}
    </div>
    )



const mapStateToProps = createStructuredSelector({
    collections : selectCollectionPerView
})
export default connect(mapStateToProps)(ShopData) ;