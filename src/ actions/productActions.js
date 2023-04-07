import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchProducts = () => {
    return dispatch => {
        axios.get('/api/products')
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.FETCH_PRODUCTS_ERROR,
                    payload: error.response.data
                });
            });
    };
};

export const addToCart = product => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = productId => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: productId
    };
};
