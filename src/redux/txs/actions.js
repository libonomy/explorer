import axios from 'axios';
import {
  GET_All_TRANSACTIONS,
  GET_All_TRANSACTIONS_LOADING,
  GET_TRANSACTIONS_BY_HASH,
  GET_TRANSACTIONS_BY_HASH_LOADING,
  GET_LATEST_TRANSACTIONS_LOADING
} from './actionTypes';
export const getAllTransactions = (filter) => (dispatch) => {
  dispatch(getAllTransactionsLoading());
  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/transaction/txs`, {
      params: filter
    })
    .then((res) => {
      dispatch({
        type: GET_All_TRANSACTIONS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_All_TRANSACTIONS,
        payload: null
      });
    });
};

export const getAllTransactionsLoading = () => ({
  type: GET_All_TRANSACTIONS_LOADING
});

export const getTransectionByHash = (hash) => (dispatch) => {
  dispatch(getTransectionByHashLoading());
  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/transaction/txs/${hash}`)
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_HASH,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_HASH,
        payload: null
      });
    });
};

export const getTransectionByHashLoading = () => ({
  type: GET_TRANSACTIONS_BY_HASH_LOADING
});
export const getLatestTransactionsLoading = () => ({
  type: GET_LATEST_TRANSACTIONS_LOADING
});
