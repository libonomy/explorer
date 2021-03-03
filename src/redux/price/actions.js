import axios from 'axios';
import {
  GET_MARKET_PRICE,
  GET_MARKET_PRICE_LOADING,
  GET_PRICE,
  GET_PRICE_LOADING
} from './actionTypes';
import io from 'socket.io-client';
import store from '../store';
const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
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

export const getPrice = () => (dispatch) => {
  dispatch({
    type: GET_PRICE_LOADING,
    payload: true
  });
  socket.emit('RegisterClient');
};

export const getPriceLoading = () => ({
  type: GET_PRICE_LOADING
});

socket.on('DashBoard', (data) => {
  store.dispatch({
    type: GET_PRICE_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_PRICE,
    payload: data.lbyPrice
  });
});
