import io from 'socket.io-client';
import { GET_NODE_INFO, GET_NODE_INFO_LOADING } from '../info/actionTypes';
import { GET_COIN_PRICE, GET_COIN_PRICE_LOADING } from '../price/actionTypes';
import store from '../store';

import {
  GET_TOTAL_SUPPLY,
  GET_TOTAL_SUPPLY_LOADING
} from '../supply/actionTypes';
import {
  GET_LATEST_BLOCKS,
  GET_LATEST_BLOCKS_LOADING
} from '../blocks/actionTypes';

import {
  GET_LATEST_TRANSACTIONS,
  GET_LATEST_TRANSACTIONS_LOADING
} from '../txs/actionTypes';
import { GET_GRAPH_DATA, GET_GRAPH_DATA_LOADING } from '../graph/actionTypes';

const name = localStorage.getItem('blockchain')
  ? localStorage.getItem('blockchain')
  : 'libonomy';

const socket = io.connect(`http://34.204.186.153:8788`, {
  transports: ['websocket', 'polling'],
  rejectUnauthorized: false,
  path: '/socket.io'
});

// const socket = io.connect(`${process.env[`REACT_APP_SOCKET_URI_${name}`]}`, {
//   secure: true,
//   transports: ['websocket']
// });

export const getLandingPageData = () => (dispatch) => {
  dispatch({
    type: GET_COIN_PRICE_LOADING,
    payload: true
  });
  dispatch({
    type: GET_NODE_INFO_LOADING,
    payload: true
  });
  dispatch({
    type: GET_TOTAL_SUPPLY_LOADING,
    payload: true
  });
  dispatch({
    type: GET_LATEST_BLOCKS_LOADING,
    payload: true
  });
  dispatch({
    type: GET_LATEST_TRANSACTIONS_LOADING,
    payload: true
  });
  dispatch({
    type: GET_GRAPH_DATA_LOADING,
    payload: true
  });
  socket.emit('RegisterClient');
};

socket.on('graphData', (data) => {
  store.dispatch({
    type: GET_GRAPH_DATA_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_GRAPH_DATA,
    payload: data.graphData
  });
});

socket.on('lbyPrice', (data) => {
  store.dispatch({
    type: GET_COIN_PRICE_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_COIN_PRICE,
    payload: data.lbyPrice
  });
});

socket.on('nodeInfo', (data) => {
  store.dispatch({
    type: GET_NODE_INFO_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_NODE_INFO,
    payload: data.nodeInfo
  });
});

socket.on('supplyInfo', (data) => {
  store.dispatch({
    type: GET_TOTAL_SUPPLY_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_TOTAL_SUPPLY,
    payload: data.supplyInfo
  });
});

socket.on('transactions', (data) => {
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_LATEST_TRANSACTIONS,
    payload: data.transactions
  });
});

socket.on('blocks', (data) => {
  store.dispatch({
    type: GET_LATEST_BLOCKS_LOADING,
    payload: false
  });

  store.dispatch({
    type: GET_LATEST_BLOCKS,
    payload: data.blocks
  });
});
