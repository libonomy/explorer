import { GET_ALL_BLOCKS, GET_ALL_BLOCKS_LOADING } from './actionTypes';

const initialState = {
  latestBlocks: null,
  latestBlocksLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOCKS:
      return { ...state, latestBlocks: payload, latestBlocksLoading: false };
    case GET_ALL_BLOCKS_LOADING:
      return { ...state, latestBlocksLoading: true };

    default:
      return state;
  }
};
