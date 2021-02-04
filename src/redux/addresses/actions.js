import axios from 'axios';
import {
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_LOADING,
  // GET_TRANSACTIONS_BY_ADDRESS,
  // GET_TRANSACTIONS_BY_ADDRESS_LOADING,
  GET_RECIEVED_TXS_BY_ADDRESS,
  GET_RECIEVED_TXS_BY_ADDRESS_LOADING,
  GET_SENT_TXS_BY_ADDRESS,
  GET_SENT_TXS_BY_ADDRESS_LOADING
} from './actionTypes';

export const getAccountDetails = (address) => (dispatch) => {
  dispatch(getAccountDetailsLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/auth/accounts/${address}`)

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
// export const getTransactionsByAddresses = (address) => (dispatch) => {
//   dispatch(getTransactionsByAddressesLoading());
//   axios
//     .get(`${process.env.REACT_APP_REST_API}/txs`, { params: address })
//     .then((res) => {
//       dispatch({
//         type: GET_TRANSACTIONS_BY_ADDRESS,
//         payload: res.data
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_TRANSACTIONS_BY_ADDRESS,
//         payload: null
//       });
//     });
// };
// export const getTransactionsByAddressesLoading = () => ({
//   type: GET_TRANSACTIONS_BY_ADDRESS_LOADING
// });

export const getRecievedTxsByAddresses = (address) => (dispatch) => {
  dispatch(getRecievedTxsByAddressesLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/txs`, { params: address })
    .then((res) => {
      dispatch({
        type: GET_RECIEVED_TXS_BY_ADDRESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_RECIEVED_TXS_BY_ADDRESS,
        payload: null
      });
    });
};
export const getRecievedTxsByAddressesLoading = () => ({
  type: GET_RECIEVED_TXS_BY_ADDRESS_LOADING
});

export const getSentTxsByAddresses = (address) => (dispatch) => {
  dispatch(getSentTxsByAddressesLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/txs`, { params: address })
    .then((res) => {
      dispatch({
        type: GET_SENT_TXS_BY_ADDRESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SENT_TXS_BY_ADDRESS,
        payload: null
      });
    });
};
export const getSentTxsByAddressesLoading = () => ({
  type: GET_SENT_TXS_BY_ADDRESS_LOADING
});
