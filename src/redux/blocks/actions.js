import axios from 'axios';
import {
  GET_ALL_BLOCKS,
  GET_ALL_BLOCKS_LOADING,
  GET_BLOCKS_BY_HEIGHT,
  GET_BLOCKS_BY_HEIGHT_LOADING,
  GET_LATEST_BLOCKS,
  GET_LATEST_BLOCKS_LOADING
} from './actionTypes';
import io from 'socket.io-client';
import store from '../store';
const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
export const getAllBlocks = (page, limit) => (dispatch) => {
  dispatch(getAllBlocksLoading());

  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/blocks`, {
      params: { page, limit }
    })
    .then((res) => {
      dispatch({
        type: GET_ALL_BLOCKS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_BLOCKS,
        payload: null
      });
    });
};

export const getAllBlocksLoading = () => ({
  type: GET_ALL_BLOCKS_LOADING
});

export const getBlocksByHeight = (height) => (dispatch) => {
  dispatch(getBlocksByHeightLoading());
  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/blocks/${height}`)
    .then((res) => {
      dispatch({
        type: GET_BLOCKS_BY_HEIGHT,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_BLOCKS_BY_HEIGHT,
        payload: null
      });
    });
};

export const getBlocksByHeightLoading = () => ({
  type: GET_BLOCKS_BY_HEIGHT_LOADING
});
export const getLatestBlocks = () => (dispatch) => {
  dispatch({
    type: GET_LATEST_BLOCKS_LOADING,
    payload: true
  });
  socket.emit('RegisterClient');
};

export const getLatestBlocksLoading = () => ({
  type: GET_LATEST_BLOCKS_LOADING
});

socket.on('DashBoard', (data) => {
  store.dispatch({
    type: GET_LATEST_BLOCKS_LOADING,
    payload: false
  });

  store.dispatch({
    type: GET_LATEST_BLOCKS,
    payload: data.blocks
  });
});
