import {
  GET_ALL_BLOCKS,
  GET_ALL_BLOCKS_LOADING,
  GET_BLOCKS_BY_HEIGHT,
  GET_BLOCKS_BY_HEIGHT_LOADING
} from './actionTypes';

const initialState = {
  latestBlocks: null,
  latestBlocksLoading: false,

  block: null,
  blockLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOCKS:
      return { ...state, latestBlocks: payload, latestBlocksLoading: false };
    case GET_ALL_BLOCKS_LOADING:
      return { ...state, latestBlocksLoading: true };

    case GET_BLOCKS_BY_HEIGHT:
      return { ...state, block: payload, blockLoading: false };
    case GET_BLOCKS_BY_HEIGHT_LOADING:
      return { ...state, blockLoading: true };

    default:
      return state;
  }
};
