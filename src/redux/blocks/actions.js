import axios from 'axios';
import { GET_ALL_BLOCKS, GET_ALL_BLOCKS_LOADING } from './actionTypes';

export const getAllBlocks = (minHeight, maxHeight) => (dispatch) => {
  dispatch(getAllBlocksLoading());

  axios
    .get(`${process.env.REACT_APP_NODE_API}/blockchain`, {
      params: { minHeight, maxHeight }
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
