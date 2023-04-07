export const getCartItems = state => state.cart.items;

export const getTotalPrice = state => {
    const items = getCartItems(state);
    return items.reduce((total, item) => total + item.price, 0);
};