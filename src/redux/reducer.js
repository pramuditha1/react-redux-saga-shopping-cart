import { ADD_TO_CART, REMOVE_TO_CART } from './constants'

export const cartData = (data = [], action) => {
    console.warn('reducer is called action : ' , action);
    // if(action.type === ADD_TO_CART) {
    //     console.warn('action type matched ', action.data)
    //     return data
    // } else {
    //     return 'no type matched'
    // }
    // implement reducer logic using a switch statement
    switch(action.type) {
        case ADD_TO_CART:
            console.warn('reducer called ADD_TO_CART')
            return 1+1
        case REMOVE_TO_CART:
            return 0
        default:
            return 'no action called'
    }
}