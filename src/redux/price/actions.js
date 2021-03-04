import axios from 'axios';
import {
  GET_MARKET_PRICE,
  GET_MARKET_PRICE_LOADING,
  GET_PRICE_LOADING
} from './actionTypes';

export const getMarketPrice = () => (dispatch) => {
  dispatch(getMarketPriceLoading());
  axios
    .get(`https://apiv2.bitz.com/Market/ticker?symbol=lby_usdt`)

    .then((res) => {
      dispatch({
        type: GET_MARKET_PRICE,
        payload: res.data
      });
    })

    .catch((err) => {
      dispatch({
        type: GET_MARKET_PRICE,
        payload: null
      });
    });
};

export const getMarketPriceLoading = () => ({
  type: GET_MARKET_PRICE_LOADING
});
export const getPriceLoading = () => ({
  type: GET_PRICE_LOADING
});
