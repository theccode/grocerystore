import { ActionTypes } from "./Types";
// add item to cart and increase quantity by 1
export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});
// update cart item quantity
export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity }
})
// remove item from cart
export const removeFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
})
// clear cart
export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
})