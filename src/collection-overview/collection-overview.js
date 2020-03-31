import React from 'react'
import './collection-overview.scss'
import ShopData from '../data-shop/dataShop'
import { Route} from 'react-router-dom'
import CollectionCategory from '../collection-category/collection-category'

const CollectionOverview = ({ match}) =>{
    return(
    <div className="collection-overview">
        <Route exact path={`${match.path}`} component={ShopData} />
        <Route path={`${match.path}/:collectionId`} component={CollectionCategory} />
    </div>
    )
    
}
export default CollectionOverview ; 