import axios from 'axios';
import {
  GET_All_TRANSACTIONS,
  GET_All_TRANSACTIONS_LOADING
} from './actionTypes';

export const getAllTransactions = (filter) => (dispatch) => {
  dispatch(getAllTransactionsLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/txs`, { params: filter })
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
