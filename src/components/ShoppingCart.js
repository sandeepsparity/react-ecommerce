import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../actions/cart';
import { getTotalPrice } from '../selectors/cart';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total price: ${totalPrice}</p>
                    <button>Checkout</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default ShoppingCart;
