export const cartData = (data = [], action) => {
    console.warn('reducer is called action : ' , action);
    if(action.type === 'ADD_TO_CART') {
        console.warn('action type matched ', action.data)
        return data
    } else {
        return 'no type matched'
    }
}