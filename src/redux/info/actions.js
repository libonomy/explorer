import axios from 'axios';
import { GET_NODE_INFO, GET_NODE_INFO_LOADING } from './actionTypes';

export const getNodeInfo = () => (dispatch) => {
  dispatch(getNodeInfoLoading());
  axios
    .get(`${process.env.REACT_APP_REST_API}/node_info`)
    .then((res) => {
      dispatch({
        type: GET_NODE_INFO,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_NODE_INFO,
        payload: null
      });
    });
};

export const getNodeInfoLoading = () => ({
  type: GET_NODE_INFO_LOADING
});
