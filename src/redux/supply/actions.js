import axios from 'axios';
import { GET_TOTAL_SUPPLY, GET_TOTAL_SUPPLY_LOADING } from './actionTypes';

export const getTotalSupply = () => (dispatch) => {
  dispatch(getTotalSupplyLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/supply/total`)
    .then((res) => {
      dispatch({
        type: GET_TOTAL_SUPPLY,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TOTAL_SUPPLY,
        payload: null
      });
    });
};

export const getTotalSupplyLoading = () => ({
  type: GET_TOTAL_SUPPLY_LOADING
});
