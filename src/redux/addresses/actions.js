import axios from 'axios';
import {
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_LOADING,
  GET_TRANSACTIONS_BY_ADDRESS,
  GET_TRANSACTIONS_BY_ADDRESS_LOADING
} from './actionTypes';

export const getAccountDetails = (address) => (dispatch, getState) => {
  const { name } = getState().blockchain;
  dispatch(getAccountDetailsLoading());
  axios
    .get(
      `${
        process.env[`REACT_APP_EXPLORER_API_${name}`]
      }/api/bank/balance/${address}`
    )

    .then((res) => {
      dispatch({
        type: GET_ACCOUNT_DETAILS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ACCOUNT_DETAILS,
        payload: null
      });
    });
};

export const getAccountDetailsLoading = () => ({
  type: GET_ACCOUNT_DETAILS_LOADING
});
export const getTransactionsByAddresses = (address) => (dispatch, getState) => {
  const { name } = getState().blockchain;

  dispatch(getTransactionsByAddressesLoading());
  axios
    .get(
      `${process.env[`REACT_APP_EXPLORER_API_${name}`]}/api/transaction/txs`,
      {
        params: address
      }
    )
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_ADDRESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_TRANSACTIONS_BY_ADDRESS,
        payload: null
      });
    });
};

export const getTransactionsByAddressesLoading = () => ({
  type: GET_TRANSACTIONS_BY_ADDRESS_LOADING
});
