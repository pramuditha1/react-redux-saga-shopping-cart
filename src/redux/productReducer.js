import { SET_PRODUCT_LIST } from './constants'

export const productList = (data = [], action) => {
    console.warn('reducer is called action : ' , action);
    // implement reducer logic using a switch statement
    switch(action.type) {
        case SET_PRODUCT_LIST:
            console.log('reducer called SET_PRODUCT_LIST')
            return [...action.data]
        default:
            console.log('reducer called no action')
        return data
    }
}