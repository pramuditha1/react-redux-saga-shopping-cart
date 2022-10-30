import { PRODUCT_LIST } from './constants'

export const getProductList = () => {
    let data = "hello this is product list"
    console.log('PRODUCT_LIST action called', data);
    return {
        type: PRODUCT_LIST,
        data
    }
}