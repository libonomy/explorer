import axios from 'axios';
import {
  GET_ACCOUNTS_DETAIL_ADDRESS,
  GET_ACCOUNTS_DETAIL_ADDRESS_LOADING,
  GET_TRANSACTIONS_BY_ADDRESSES,
  GET_TRANSACTIONS_BY_ADDRESSES_LOADING
} from './actionTypes';

export const getAccountDetailAddress = (address) => (dispatch) => {
  dispatch(getAccountDetailAddressLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/auth/accounts/${address}`)

    .then((res) => {
      dispatch({
        type: GET_ACCOUNTS_DETAIL_ADDRESS,
        payload: res.data
      });
      console.log('this is then');
    })
    .catch((err) => {
      dispatch({
        type: GET_ACCOUNTS_DETAIL_ADDRESS,
        payload: null
      });
    });
};

export const getAccountDetailAddressLoading = () => ({
  type: GET_ACCOUNTS_DETAIL_ADDRESS_LOADING
});
export const getTransactionsByAddresses = (address) => (dispatch) => {
  dispatch(getTransactionsByAddressesLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/txs`, { params: address })
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_ADDRESSES,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_ADDRESSES,
        payload: null
      });
    });
};
export const getTransactionsByAddressesLoading = () => ({
  type: GET_TRANSACTIONS_BY_ADDRESSES_LOADING
});
