import { createSelector} from 'reselect'

const SelectShop = state => state.shop ;

// const COLLECTION_ID = {
//     hats: 1 ,
//     sneakers : 2 ,
//     jackets : 3 ,
//     womens: 4 ,
//     mens : 5
// }

export const selectShopData = createSelector(
    [SelectShop] , 
    shop => shop.collections
);
export const selectCollectionPerView = createSelector(
        [selectShopData] , 
        collections => Object.keys(collections).map(key => collections[key])
    )

    export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
  );