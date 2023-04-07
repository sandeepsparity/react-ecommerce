const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

const calculateCartTotal = (cartItems) => {
    const total = cartItems.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);
    return formatPrice(total);
};

export {
    formatPrice,
    calculateCartTotal,
};