import axios from 'axios';
import {
  GET_All_TRANSACTIONS,
  GET_All_TRANSACTIONS_LOADING,
  GET_LATEST_TRANSACTIONS,
  GET_LATEST_TRANSACTIONS_LOADING,
  GET_TRANSACTIONS_BY_HASH,
  GET_TRANSACTIONS_BY_HASH_LOADING
} from './actionTypes';
import io from 'socket.io-client';
import store from '../store';
const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
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

export const getLatestTransactions = () => (dispatch) => {
  dispatch({
    type: GET_LATEST_TRANSACTIONS_LOADING,
    payload: true
  });
  socket.emit('RegisterClient');
};

export const getLatestTransactionsLoading = () => ({
  type: GET_LATEST_TRANSACTIONS_LOADING
});

socket.on('DashBoard', (data) => {
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS,
    payload: data.transactions
  });
});
