// import axios from 'axios';
import { GET_NODE_INFO, GET_NODE_INFO_LOADING } from './actionTypes';
import io from 'socket.io-client';
import store from '../store';
const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
// export const getNodeInfo = () => (dispatch) => {
//   dispatch(getNodeInfoLoading());
//   axios
//     .get(`${process.env.REACT_APP_EXPLORER_API}/api/stats/nodeInfo`)
//     .then((res) => {
//       dispatch({
//         type: GET_NODE_INFO,
//         payload: res.data
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_NODE_INFO,
//         payload: null
//       });
//     });
// };

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
socket.on('DashBoard', (data) => {
  store.dispatch({
    type: GET_NODE_INFO_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_NODE_INFO,
    payload: data.nodeInfo
  });
});
