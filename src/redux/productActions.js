import { PRODUCT_LIST, FILTER_PRODUCTS } from './constants'

export const getProductList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const filterProductList = (searchText) => {
    return {
        type: FILTER_PRODUCTS,
        searchText
    }
}