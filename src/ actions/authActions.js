import axios from 'axios';
import * as actionTypes from './actionTypes';

export const login = (username, password) => {
    return dispatch => {
        axios.post('/api/login', { username, password })
            .then(response => {
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.LOGIN_ERROR,
                    payload: error.response.data
                });
            });
    };
};

export const logout = () => {
    return dispatch => {
        axios.post('/api/logout')
            .then(response => {
                dispatch({
                    type: actionTypes.LOGOUT_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.LOGOUT_ERROR,
                    payload: error.response.data
                });
            });
    };
};
