// import axios from 'axios';
import {
  GET_TOTAL_SUPPLY,
  GET_TOTAL_SUPPLY_LOADING,
  GET_PRICE,
  GET_PRICE_LOADING,
  GET_NODE_INFO,
  GET_NODE_INFO_LOADING,
  GET_LATEST_BLOCKS,
  GET_LATEST_BLOCKS_LOADING,
  GET_LATEST_TRANSACTIONS,
  GET_LATEST_TRANSACTIONS_LOADING
} from './actionTypes';
import io from 'socket.io-client';
import store from '../store';

const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
export const getTotalSupply = () => (dispatch) => {
  dispatch({
    type: GET_TOTAL_SUPPLY_LOADING,
    payload: true
  });
  socket.emit('RegisterClient');
};
export const getTotalSupplyLoading = () => ({
  type: GET_TOTAL_SUPPLY_LOADING
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
export const getNodeInfo = () => (dispatch) => {
  dispatch({
    type: GET_NODE_INFO_LOADING,
    payload: true
  });

  socket.emit('RegisterClient');
};
export const getNodeInfoLoading = () => ({
  type: GET_NODE_INFO_LOADING
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
    type: GET_TOTAL_SUPPLY_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_TOTAL_SUPPLY,
    payload: data.supplyInfo
  });
  store.dispatch({
    type: GET_PRICE_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_PRICE,
    payload: data.lbyPrice
  });
  store.dispatch({
    type: GET_NODE_INFO_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_NODE_INFO,
    payload: data.nodeInfo
  });
  store.dispatch({
    type: GET_LATEST_BLOCKS_LOADING,
    payload: false
  });

  store.dispatch({
    type: GET_LATEST_BLOCKS,
    payload: data.blocks
  });
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS,
    payload: data.transactions
  });
});
