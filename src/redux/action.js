export const addToCart = (data) => {
    console.log('addToCart action called', data);
    return {
        type: 'ADD_TO_CART',
        data
    }
}