import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from './constants'

export const cartData = (data = [], action) => {
    console.warn('reducer is called action : ' , action);
    // implement reducer logic using a switch statement
    switch(action.type) {
        case ADD_TO_CART:
            console.warn('reducer called ADD_TO_CART')
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn('reducer called REMOVE_FROM_CART')
            data.length = data.length ? data.length - 1 : []
            return [...data]
        case EMPTY_CART:
            console.warn('reducer called EMPTY_CART')
            data = []
            return [...data]
        default:
            return data
    }
}