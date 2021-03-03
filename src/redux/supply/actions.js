// import axios from 'axios';
import { GET_TOTAL_SUPPLY, GET_TOTAL_SUPPLY_LOADING } from './actionTypes';
import io from 'socket.io-client';
import store from '../store';
const socket = io.connect('http://34.239.36.156:8787', {
  secure: true,
  transports: ['websocket']
});
// export const getTotalSupply = () => (dispatch) => {
//   dispatch(getTotalSupplyLoading());
//   axios
//     .get(`${process.env.REACT_APP_EXPLORER_API}/api/stats/supplyStats`)
//     .then((res) => {
//       dispatch({
//         type: GET_TOTAL_SUPPLY,
//         payload: res.data
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_TOTAL_SUPPLY,
//         payload: null
//       });
//     });
// };

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

socket.on('DashBoard', (data) => {
  store.dispatch({
    type: GET_TOTAL_SUPPLY_LOADING,
    payload: false
  });
  store.dispatch({
    type: GET_TOTAL_SUPPLY,
    payload: data.supplyInfo
  });
});
