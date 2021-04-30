export const CartReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {

        return [...state, action.payload]
    }
    else {
        return state
    }
}